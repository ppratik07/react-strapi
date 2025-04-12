import type { Schema, Struct } from '@strapi/strapi';

export interface RepeatabletextFeatures extends Struct.ComponentSchema {
  collectionName: 'components_repeatabletext_features';
  info: {
    displayName: 'features';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'repeatabletext.features': RepeatabletextFeatures;
    }
  }
}
