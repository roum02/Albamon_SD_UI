export const eventTypes = `
  scalar JSON

  enum ComponentType {
    TITLE
    IMAGE
    FLOATING_BUTTON
    IMAGE_WITH_BUTTON
    BUTTON
    BUTTON_GROUP
    FOOTER
    LIST
    SPLIT
    CAROUSEL
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
    textAlign: String
    width: Int
    height: Int
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
    backgroundColor: String
    children: [JSON!]
  }
    
  type ListComponent {
    type: String!
    text: String!
  }

  type FooterComponent {
    type: ComponentType!
    text: String
    fontSize: Int
    fontWeight: String
    textAlign: String
    color: String
    children: [ListComponent!]
    backgroundColor: String
  }

  type ComponentResponse {
    resultCode: String!
    resultMessage: String!
    eventId: String!
    components: [JSON!]
  }

  type ButtonComponent {
    type: ComponentType!
    text: String
    backgroundColor: String
    textColor: String
    borderColor: String
    height: Int
    icon: [String]
    onClick: String
    color: String
  }

  type ButtonGroupComponent {
    type: ComponentType!
    backgroundColor: String
    direction: String
    justifyContent: String
    gap: Int
    buttons: [ButtonComponent!]
  }

  type CarouselComponent {
    type: ComponentType!
    children: [ImageComponent!]
  }

  type SplitComponent {
    type: ComponentType!
    paddingTop: Int
    paddingBottom: Int
    paddingLeft: Int
    paddingRight: Int
  }
`;
