import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ButtonsComponent } from '../buttons/buttons.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';


export default {
    title: 'Components/Buttons',
    component: ButtonsComponent,
    decorators: [
      moduleMetadata({
        declarations: [ButtonsComponent],
        imports: [CommonModule],
      }),
      withKnobs,
    ],
  };

const Template: Story<ButtonsComponent> = () => ({
    component: ButtonsComponent,
    props: {
        background: select('Background', ['primary', 'danger'] , 'primary'),
        // we use the text knob to set the ngContent value
        content: text('Text', 'Enviar')
      },
    template: `
    <app-buttons
    [background]="background">
    {{ content }}
    </app-buttons>`,
  });


export const Base = Template.bind({});