import { CardComponent } from './Card';

export default {
  title: 'Components/Card',// ? displayed in the Storybook sidebar
}

const PrimaryTemplate = () => `<wc-card></wc-card>`;
export const ImageCard = PrimaryTemplate.bind({});
