import type { Schema, Struct } from '@strapi/strapi';

export interface UiCarCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_car_cards';
  info: {
    displayName: 'CarCard';
    icon: 'car';
  };
  attributes: {
    achieve_car_date: Schema.Attribute.Date;
    carousel: Schema.Attribute.Media<'images', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    main_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    model_year: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    place: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.car-card': UiCarCard;
    }
  }
}
