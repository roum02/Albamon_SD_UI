export const eventTypes = `
  enum ComponentType {
    TITLE
    IMAGE
    FLOATING_BUTTON
    IMAGE_WITH_BUTTON
    BUTTON
  }

  type TitleComponent {
    type: ComponentType!
    text: String!
    fontSize: Int
    fontWeight: String
    textAlign: String
    color: String
  }

  type ImageComponent {
    type: ComponentType!
    imageUrl: String!
    backgroundColor: String
    paddingTop: Int
    paddingBottom: Int
    paddingLeft: Int
    paddingRight: Int
  }

  type FloatingButtonComponent {
    type: ComponentType!
    text: String!
    backgroundColor: String!
    textColor: String
    position: String
    bottom: Int
  }

  type ImageWithButtonComponent {
    type: ComponentType!
    imageUrl: String!
    buttonText: String!
    buttonBackgroundColor: String
    buttonTextColor: String
    children: [Component!]!
  }

  type ButtonComponent {
    type: ComponentType!
    text: String!
    onClick: String!
  }

  union Component =
    | TitleComponent
    | ImageComponent
    | FloatingButtonComponent
    | ImageWithButtonComponent
    | ButtonComponent

  type ComponentResponse {
    resultCode: String!
    resultMessage: String!
    components: [Component!]!
  }
`;
