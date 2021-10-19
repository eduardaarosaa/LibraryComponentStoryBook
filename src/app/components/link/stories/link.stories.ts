import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { LinkComponent } from '../link.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';

// This exports the Stories group for this component
export default {
  title: 'Components/Link',
  component: LinkComponent,
  decorators: [
    moduleMetadata({
      declarations: [LinkComponent],
      imports: [CommonModule],
    }),
    // we add the withKnobs decorator in order to use it
    withKnobs,
  ],
};
// This creates a Story for the component
const Template: Story<LinkComponent> = () => ({
  component: LinkComponent,
  props: {
    color: select('Color', ['primary', 'secondary'] , 'primary'),
    // we use the text knob to set the ngContent value
    content: text('Text', 'Visit Storybooks'),
    href: 'https://storybook.js.org/',
    target: '_blank',
  },
  template: `
    <app-link
      [color]="color"
      [href]="href"
      [target]="target"
    >
      {{ content }}
    </app-link>`,
});
export const Base = Template.bind({});