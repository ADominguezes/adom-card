(function () {
  'use strict';
  Polymer({

    is: 'adom-card',

    properties: {
      /**
       * Heading of card
       */
      heading: {
        type: String,
        observer: '_chooseHeading'
      },
      /**
       * Subheading of card
       */
      subheading: {
        type: String
      },
      /**
       * Show when use an image url
       */
      imgUrl: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      /**
       * Show when use an video url from youtube or vimeo
       */
      videoUrl: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      /**
       * If it's true the body card's composition is in vertical direction 
       */
      column: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Change the order of the body card
       */
      reverse: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * If it's true don't show the header of the card
       */
      noHeader: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * If it's true, don't show the footer of the card
       */
      noFooter: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * If it's true don't show the image or the video of the card
       */
      noMedia: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Aria heading of the card
       */
      ariaHeadingLevel: {
        type: String,
        value: "2",
        observer: '_headingLevel'
      },
      /**
       * Aria subheading of the card
       */
      ariaSubheadingLevel: {
        type: String,
        value: "3"
      }
    },
    /**
     * set the level and the role of the heading
     */
    _headingLevel: function () {
      var heading = this.$$('#heading');
      if (this.ariaHeadingLevel >= 1 && this.ariaHeadingLevel <= 6) {
        heading.setAttribute('role', 'heading');
        heading.setAttribute('aria-level', this.ariaHeadingLevel);
      } else {
        heading.removeAttribute('role');
        heading.removeAttribute('aria-level');
      }
    },
    /**
     * set the level and the role of the subheading
     */
    _chooseHeading: function() {
      var headingBody = Polymer.dom(this.root).querySelector('#headingBody');
      if((this.heading) && (!this.noHeader)) {
        headingBody.hidden = true;
      } else {
        headingBody.setAttribute('role', 'heading');
        headingBody.setAttribute('aria-level', this.ariaHeadingLevel);
      }
    }

  });
}());