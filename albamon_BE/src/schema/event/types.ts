export const eventTypes = `
  scalar JSON

  enum ComponentType {
    TITLE
    IMAGE
    FLOATING_BUTTON
    IMAGE_WITH_BUTTON
    BUTTON
    FOOTER
    LIST
    SPLIT
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
    imageUrl: String
    buttonText: String
    buttonBackgroundColor: String
    buttonTextColor: String
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
`;
