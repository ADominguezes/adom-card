# \<adom-card\>

Is container component with three zones: header, body and footer.

## Header
shows a heading with the name of card, `heading`. It's possible add content in this zone with class `card-header`.
So, it's possible hide this zone with the property `no-header`. In this case the heading shows in body content.

## Body
This zone it's divided in two container: media (show an image or video if it's defined' `imgUr` or `videoUrl`) and content (if `noHeader` is true, show the `heading` and `subheading`).
It's possible add content in this zone with class `card-body`.
So, it's possible hide the image or video zone with the property `no-media`. In this case the content width is 100%.

## Footer
shows a free container which is possible add content in this zone with class `card-footer`.
So, it's possible hide this zone with the property `no-footer`.

### Other properties

__column__ show the body in vertical direction
__reverse__ Change the order of the body, if it's true the media it's in right zone and content is in left zone.
__withShadow__ Show a shadow around the card.

### complete example

```html
<adom-card heading="Lorem ipsum" img-url="http://lorempixel.com/600/400/" subheading="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." with-shadow>
  <div class="card-header">
    <button class="button">
      Config
    </button>
    <button class="button">
      User
    </button>
  </div>
  <div class="card-footer">
    <button class="button">
      Leer más
    </button>
  </div>
  <div class="card-body">
    <p>Nam eu metus auctor mauris mattis lacinia. Vivamus condimentum accumsan dui sit amet mattis. Nam at tortor
      eget sapien consequat sodales a eu lacus. Donec feugiat commodo mollis. Curabitur nisl est, accumsan eu blandit
      a, mollis ac tellus. Maecenas et sodales elit. Nunc molestie mauris eu orci congue, a consequat quam cursus.
      Praesent pharetra convallis erat eget aliquet. Quisque auctor rhoncus odio et efficitur. Mauris varius sapien
      vel sem aliquet, eget gravida mauris vestibulum.</p>
    <p>Nam eu metus auctor mauris mattis lacinia. Vivamus condimentum accumsan dui sit amet mattis. Nam at tortor
      eget sapien consequat sodales a eu lacus. Donec feugiat commodo mollis. Curabitur nisl est, accumsan eu blandit
      a, mollis ac tellus. Maecenas et sodales elit. Nunc molestie mauris eu orci congue, a consequat quam cursus.
      Praesent pharetra convallis erat eget aliquet. Quisque auctor rhoncus odio et efficitur. Mauris varius sapien
      vel sem aliquet, eget gravida mauris vestibulum.</p>
  </div>
</adom-card>
```


### Styling

The following custom properties and mixins are available for styling:

| Custom property                      | Description                                        | Default      |
|:-------------------------------------|:---------------------------------------------------|:------------:|
| --adom-card                          | empty mixin for :host                              | {}           |
| --adom-card-header                   | empty mixin for :host .header                      | {}           |
| --adom-card-header-heading           | empty mixin for :host .header .heading             | #072146      |
| --adom-card-body                     | empty mixin for :host .body                        | rem(60px)    |
| --adom-card-body-media               | empty mixin for :host .body .media                 | #fff         |
| --adom-card-body-content             | empty mixin for :host .body .content               | {}           |
| --adom-card-body-content-heading     | empty mixin for :host .body .content .heading      | {}           |
| --adom-card-body-content-subheading  | empty mixin for :host .body .content .subheading   | {}           |
| --adom-card-footer                   | empty mixin for :host .footer                      | {}           |
| --adom-card-with-shadow              | empty mixin for :host([with-shadow])               | {}           |

| Custom property                               | Description                  | Default |
|:----------------------------------------------|:-----------------------------|:-------:|
| --adom-card-bg-color                          | background color for :host   | #fff    |
| --adom-card-header-border-color               | border color for header      | #ededed |
| --adom-card-header-bg-color                   | background color for header  | #fff    |
| --adom-card-header-heading-color              | color for heading            | #414244 |
| --adom-card-body-bg-color                     | background color for body    | #fff    |
| --adom-card-body-color                        | color for body               | #414244 |
| --adom-card-body-content-color                | color for content            | #666768 |
| --adom-card-body-content-subheading-color     | color for subheading         | #1081C2 |
| --adom-card-body-content-subheading-font-size | font-size for subheading     |1.2em    |
| --adom-card-footer-border-color               | border color for footer      | #ededed |
| --adom-card-footer-color                      | color for footer             | #666768 |
| --adom-card-footer-bg-color                   | background color for footer  | #fff    |
| --adom-card-body-media-width                  | width for card media         | 50%     |
| --adom-card-body-content-width                | width for content media      | 50%     |

## Using the quickly starter kit for a polymer element

clone this repository in your local machine

    $ git clone https://Adominguezes@bitbucket.org/Adominguezes/adom-card.git

Begin with the component

    $ cd adom-card
    $ npm install
    $ bower install

## Serve the Application

You can serve the application with:

    $ gulp serve
