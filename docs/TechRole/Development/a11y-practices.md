

# A11y Practices

![Learn A11y](https://web-accessibility-v3.vercel.app/topics)

## Web Content Accessibility Guidelines (WCAG)

- **A: Essential**: If this isn't met, assistive technology may not be able to read, understand, or fully operate the page or view.
- **AA: Ideal Support**: Required for multiple government and public body websites.
- **AAA: Specialized Support**: This is typically reserved for parts of websites and web apps that serve a specialized audience

## Content - Content is the most important part of your site.

- **Use plain language and avoid figures of speech, idioms, and complicated metaphors**: Write content at an 8th grade reading level.
- **Make sure that button, a, and label element content is unique and descriptive**: Terms like “click here” and “read more” do not provide any context. Some people navigate using a list of all buttons or links on a page or view. When using this mode, the terms indicate what will happen if navigated to or activated.
- **Use left-aligned text for left-to-right (LTR) languages, and right-aligned text for right-to-left (RTL) languages.**
- **Centered-aligned or justified text is difficult to read**: Valid HTML helps to provide a consistent, expected experience across all browsers and assistive technology.

## Global code - Global code is code that affects your entire website or web app.

- **Validate your HTML**: Valid HTML helps to provide a consistent, expected experience across all browsers and assistive technology.
- **Use a lang attribute on the html element**: This helps assistive technology such as screen readers to pronounce content correctly.
- **Provide a unique title for each page or view:** The title element, contained in the document's head element, is often the first piece of information announced by assistive technology. This helps tell people what page or view they are going to start navigating.
- **Ensure that viewport zoom is not disabled:** Some people need to increase the size of text to a point where they can read it. Do not stop them from doing this, even for web apps with a native app-like experience. Even native apps should respect Operating System settings for resizing text.
- **Use landmark elements to indicate important content regions**: Landmark regions help communicate the layout and important areas of a page or view, and can allow quick access to these regions. For example, use the nav element to wrap a site's navigation, and the main element to contain the primary content of a page.
- E**nsure a linear content flow**: Remove tabindex attribute values that aren't either 0 or -1. Elements that are inherently focusable, such as links or button elements, do not require a tabindex. Elements that are not inherently focusable should not have a tabindex applied to them outside of very specific use cases.
- **Avoid using the autofocus attribute**: People who are blind or who have low vision may be disoriented when focus is moved without their permission. Additionally, autofocus can be problematic for people with motor control disabilities, as it may create extra work for them to navigate out from the autofocused area and to other locations on the page/view.
- **Allow extending session timeouts**: If you cannot remove session timeouts altogether, then let the person using your site easily turn off, adjust, or extend their session well before it ends.
- **Remove title attribute tooltips**: The title attribute has numerous issues, and should not be used if the information provided is important for all people to access. An acceptable use for the title attribute would be labeling an iframe element to indicate what content it contains.

## Keyboard - It is important that your interface and content can be operated, and navigated by use of a keyboard.

- **Make sure there is a visible focus style for interactive elements that are navigated to via keyboard input**: Can a person navigating with a keyboard, switch, voice control, or screen reader see where they currently are on the page?
- **Check to see that keyboard focus order matches the visual layout**: Can a person navigating with a keyboard or screen reader move around the page in a predictable way?
- **Remove invisible focusable elements**: Remove the ability to focus on elements that are not presently meant to be discoverable. This includes things like inactive drop down menus, off screen navigations, or modals.

## Images

- **Make sure that all img elements have an alt attribute**: alt attributes (alt text) give a description of an image for people who may not be able to view them. When an alt attribute isn't present on an image, a screen reader may announce the image's file name and path instead. This fails to communicate the image’s content.
- **Make sure that decorative images use null alt (empty) attribute values**: Null alt attributes are also sometimes known as empty alt attributes. They are made by including no information between the opening and closing quotes of an alt attribute. Decorative images do not communicate information that is required to understand the website's overall meaning. Historically they were used for flourishes and spacer gif images, but tend to be less relevant for modern websites and web apps.
- Provide a text alternative for complex images such as charts, graphs, and maps: Is there a plain text which lists points on the map or sections of a flowchart? Describe all visible information. This includes graph axes, data points and labels, and the overall point the graphic is communicating.
- **For images containing text, make sure the alt description includes the image's text**: For example, the FedEx logo should have an alt value of “FedEx.”

## Headings - They are incredibly important for helping people who use assistive technology to understand the meaning of a page or view.

- **Use heading elements to introduce content**: Heading elements construct a document outline, and should not be used for purely visual design.
- **Use only one h1 element per page or view**: The h1 element should be used to communicate the high-level purpose of the page or view. Do not use the h1 element for a heading that does not change between pages or views (for example, the site's name).
- **Heading elements should be written in a logical sequence**: The order of heading elements should descend, based on the “depth” of the content. For example, a h4 element should not appear on a page before the first h3 element declaration. A tool such as headingsMap can help you evaluate this.
- **Don't skip heading levels**: For example, don't jump from a h2 to a h4, skipping a h3 element. If heading levels are being skipped for a specific visual treatment, use CSS classes instead.

## Lists - Lists elements let people know a collection of items are related and if they are sequential, and how many items are present in the list grouping.

- **Use list elements (ol, ul, and dl elements) for list content**: This may include sections of related content, items visually displayed in a grid-like layout, or sibling a elements.

## Controls - Controls are interactive elements such as links and buttons that let a person navigate to a destination or perform an action

- **Use the a element for links**: Links should always have a href attribute, even when used in Single Page Applications (SPAs). Without a href attribute, the link will not be properly exposed to assistive technology. An example of this would be a link that uses an onclick event, in place of a href attribute.
- Ensure that links are recognizable as links: Color alone is not sufficient to indicate the presence of a link. Underlines are a popular and commonly-understood way to communicate the presence of link content.
- **Ensure that controls have focus states**: Visible focus styles help people determine which interactive element has keyboard focus. This lets them know that they can perform actions like activating a button or navigating to a link's destination.
- **Use the button element for buttons**: Buttons are used to submit data or perform an on-screen action which does not shift keyboard focus. You can add type="button" to a button element to prevent the browser from attempting to submit form information when activated.
- **Provide a skip link and make sure that it is visible when focused:** A skip link can be used to provide quick access to the main content of a page or view. This allows a person to easily bypass globally repeated content such as a website's primary navigation, or persistent search widget.
- **Identify links that open in a new tab or window**: Ideally, avoid links that open in a new tab or window. If a link does, ensure the link's behavior will be communicated in a way that is apparent to all users. Doing this will help people understand what will happen before activating the link. While this technique is technically not required for compliance, it is an often-cited area of frustration for many different kinds of assistive technology users.

## Tables - Tables are a structured set of data that help people understand the relationships between different types of information

- **Use the table element to describe tabular data**: Do you need to display data in rows and columns? Use the table element.
- **Use the th element for table headers (with appropriate scope attributes)**: Depending on how complex your table is, you may also consider using scope="col" for column headers, and scope="row" for row headers. Many different kinds of assistive technology still use the scope attribute to help them understand and describe the structure of a table.
- **Use the caption element to provide a title for the table**: The table's caption should describe what kind of information the table contains.

## Forms

- **All inputs in a form are associated with a corresponding label element**: Use a for/id pairing to guarantee the highest level of browser/assistive technology support.
- Use fieldset and legend elements where appropriate: Does your form contain multiple sections of related inputs? Use fieldset to group them, and legend to provide a label for what this section is for.
- Inputs use autocomplete where appropriate: Providing a mechanism to help people more quickly, easily, and accurately fill in form fields that ask for common information (for example, name, address, phone number).
- Make sure that form input errors are displayed in list above the form after submission: This provides a way for assistive technology users to quickly have a high-level understanding of what issues are present in the form. This is especially important for larger forms with many inputs. Make sure that each reported error also has a link to the corresponding field with invalid input.
- Associate input error messaging with the input it corresponds to: Techniques such as using aria-describedby allow people who use assistive technology to more easily understand the difference between the input and the error message associated with it.
- Make sure that error, warning, and success states are not visually communicated by just color: People who are color blind, who have other low vision conditions, or different cultural understandings for color may not see the state change, or understand what kind of feedback the state represents if color is the only indicator.

## Media

- **Make sure that media does not autoplay**: Unexpected video and audio can be distracting and disruptive, especially for certain kinds of cognitive disability such as ADHD. Certain kinds of autoplaying video and animation can be a trigger for vestibular and seizure disorders.
- **Ensure that media controls use appropriate markup**: Examples include making sure an audio mute button has a pressed toggle state when active, or that a volume slider uses [input type="range"].
- **Check to see that all media can be paused**: Provide a global pause function on any media element. If the device has a keyboard, ensure that pressing the Space key can pause playback. Make sure you also don't interfere with the Space key's ability to scroll the page/view when not focusing on a form control.

## Video

- **Confirm the presence of captions**: Captions allow a person who cannot hear the audio content of a video to still understand its content.
- **Remove seizure triggers**: Certain kinds of strobing or flashing animations will trigger seizures.

## Audio

- **Confirm that transcripts are available**: Transcripts allow people who cannot hear to still understand the audio content. It also allows people to digest audio content at a pace that is comfortable to them.

## Appearance - How your website app content looks in any given situation.

- Check your content in specialized browsing modes: Activate modes such as Windows High Contrast or Inverted Colors. Is your content still legible? Are your icons, borders, links, form fields, and other content still present? Can you distinguish foreground content from the background?
- **Increase text size to 200%**: Is the content still readable? Does increasing the text size cause content to overlap?
- **Double-check that good proximity between content is maintained**: Use the [straw test](https://scottvinkle.me/blogs/work/proximity-and-zoom/) to ensure people who depend on screen zoom software can still easily discover all content.
- **Make sure color isn't the only way information is conveyed**: Can you still see where links are among body content if everything is grayscale?
- **Make sure instructions are not visual or audio-only**: Use a combination of characteristics to write cues, particularly the actual names of sections and elements, rather than just descriptions like location (“on the right”) or audio (“after the tone”).
- **Use a simple, straightforward, and consistent layout**: A complicated layout can be confusing to understand and use.

## Animation

- **Ensure animations are subtle and do not flash too much**: Certain kinds of strobing or flashing animations will trigger seizures. Others may be distracting and disruptive, especially for certain kinds of cognitive disability such as ADHD.
- **Provide a mechanism to pause background video**: Background video can be distracting, especially if content is placed over it.
- **Make sure all animation obeys the prefers-reduced-motion media query**: Remove animations when the “reduce motion” setting is activated. If an animation is necessary to communicate meaning for a concept, slow its duration down.

## Color contrast [Color Contrast](https://www.a11yproject.com/posts/what-is-color-contrast/)

- **Check the contrast for all normal-sized text**: Level AA compliance requires a contrast ratio of 4.5:1.
- **Check the contrast for all large-sized text**: Level AA compliance requires a contrast ratio of 3:1.
- **Check the contrast for all icons**: Level AA compliance requires a contrast ratio of 3.0:1.
- **Check the contrast of borders for input elements (text input, radio buttons, checkboxes, etc.)**: Level AA compliance requires a contrast ratio of 3.0:1.
- **Check text that overlaps images or video**: Is text still legible?
- **Check custom ::selection colors**: Is the color contrast you set in your ::selection CSS declaration sufficient? Otherwise someone may not be able read it if they highlight it.

## Mobile and touch

- **Check that the site can be rotated to any orientation**: Does the site only allow portrait orientation?
- **Remove horizontal scrolling**: Requiring someone to scroll horizontally can be difficult for some, irritating for all.
- **Ensure sufficient space between interactive items in order to provide a scroll area**: Some people who experience motor control issues such as hand tremors may have a very difficult time scrolling past interactive items which feature zero spacing.

## A11y Tests

- [A11y Checklist](https://www.a11yproject.com/checklist/)

- Run AXE scan
- Run Lighthouse scan
