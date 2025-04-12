import React, { useState, useEffect } from 'react';

// Type definitions for the Strapi API response
interface TextNode {
  type: string;
  text: string;
}

interface ParagraphNode {
  type: string;
  children: TextNode[];
}

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface ImageFormats {
  thumbnail: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  large: ImageFormat;
}

interface HeroImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface LandingPageData {
  id: number;
  documentId: string;
  Title: string;
  Subtitle: ParagraphNode[];
  CTAButtonText: string;
  CTAButtonLink: string;
  HeroImage: HeroImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiResponse {
  data: LandingPageData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const LandingPageHero: React.FC = () => {
  const [landingPageData, setLandingPageData] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const backendUrl = 'http://localhost:1337';

  useEffect(() => {
    const fetchLandingPageData = async (): Promise<void> => {
      try {
        const response = await fetch('http://localhost:1337/api/landing-pages?populate=HeroImage');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data: StrapiResponse = await response.json();
        if (data.data && data.data.length > 0) {
          setLandingPageData(data.data[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching landing page data:', error);
        setError('Failed to load landing page');
        setLoading(false);
      }
    };

    fetchLandingPageData();
  }, []);

  // Extract text from the subtitle structure
  const extractSubtitleText = (subtitle: ParagraphNode[] | undefined): string => {
    if (!subtitle || !subtitle.length) return '';
    
    const paragraphs = subtitle.map(item => {
      if (item.type === 'paragraph' && item.children && item.children.length) {
        return item.children
          .filter(child => child.type === 'text')
          .map(child => child.text)
          .join('');
      }
      return '';
    });
    
    return paragraphs.join(' ');
  };

  // Get image URL with proper base URL
  const getImageUrl = (imagePath: string): string => {
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    return `${backendUrl}${imagePath}`;
  };

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (error) return <div className="text-center py-16 text-red-600">{error}</div>;
  if (!landingPageData) return <div className="text-center py-16">No landing page content found</div>;

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{landingPageData.Title}</h1>
            
            <p className="text-xl md:text-2xl mb-8">
              {extractSubtitleText(landingPageData.Subtitle)}
            </p>
            
            <a 
              href={landingPageData.CTAButtonLink} 
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300 inline-block"
            >
              {landingPageData.CTAButtonText}
            </a>
          </div>
          
          <div className="md:w-1/2">
            {landingPageData.HeroImage && (
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={getImageUrl(landingPageData.HeroImage.formats?.large?.url || landingPageData.HeroImage.url)} 
                  alt={landingPageData.HeroImage.alternativeText || landingPageData.Title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageHero;