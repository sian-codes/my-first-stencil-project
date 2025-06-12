import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

// This decorator provides metadata about the component to the Stencil compiler
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  // the component contains three class members, first, middle and last.
  // Each of these class members have the @Prop() decorator applied to them
  // @Prop() tells Stencil that the property is public to the component,
  // and allows Stencil to rerender when any of these public properties change
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
