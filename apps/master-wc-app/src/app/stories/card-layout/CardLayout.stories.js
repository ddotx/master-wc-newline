import './CardLayout'

export default {
  title: 'Components/CardLayout',
  // ? Create controls for the story
  argTypes: {
    image: {
      control: { type: 'text' }, // ? make storybook display text field in the Controls section
    },
    headline: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
    link: {
      control: { type: 'text' },
    },
  }
}

// const image = "http://unsplash.it/g/500/500?random&blur&gravity=center"
const image = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3569&q=80"

/* const PrimaryTemplate = () => `
<wc-card-layout>
  <img slot="image" src="${image}" alt="Image" />
  <h4 slot="header">Food</h4>
  <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <a href="#" slot="footer">Read</a>
</wc-card-layout>`; */



const PrimaryTemplate = ({ images, headline, content, link }) => `
<wc-card-layout>
  <img slot="header" src="${image}">
  <h4 slot="header">${headline}</h4>
  <p slot="content">${content}</p>
  <a href="#" slot="footer">${link}</a>
</wc-card-layout>;
`

export const LayoutCard = PrimaryTemplate.bind({});

// ? Set default values for control
LayoutCard.args = {
  images: image,
  headline: 'Food',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  link: 'Read'
}
