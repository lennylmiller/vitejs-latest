export const template = /* html */`<h1>inag-drawer</h1>
<p>
    The navigation drawer slides in from the left and contains the navigation destinations for your app.
</p>

<h3>Usage</h3>
<pre>
  &lt;inag-drawer&gt;
    &lt;inag-slidemenu label="Languages" slot="content"&gt;
      &lt;a slot="item" href="#"&gt;Javascript&lt;/a&gt;
      &lt;a slot="item" href="#"&gt;PHP&lt;/a&gt;
      &lt;a slot="item" href="#"&gt;Typescript&lt;/a&gt;
      &lt;a slot="item" href="#"&gt;Scala&lt;/a&gt;
    &lt;/inag-slidemenu&gt;
  &lt;/inag-drawer&gt;
</pre>

<h3>Attributes</h3>
<ul>
  <li><code>open</code>: empty, when present the drawer will appear open</li>
</ul>

<h3>Slots</h3>
<ul>
  <li><code>content</code>: content to be rendered in the drawer</li>
</ul>

<h3>Methods</h3>
<ul>
  <li><code>open</code>: opens the drawer.</li>
  <li><code>close</code>: closes the drawer.</li>
  <li><code>toggle</code>: toggles the drawer.</li>
</ul>

<h3>Styling</h3>
<ul>
  <li><code>--drawer-color</code>: color of the drawer, default: #ffffff</li>
</ul>

<section class="demo">
  <h3>Demo</h3>
  <inag-button label="Toggle" id="inag-drawer-toggle" raised></inag-button>

  <inag-drawer id="demo-inag-drawer">
    <ul slot="content">
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
      <li><a href="#">Link 4</a></li>
      <li><a href="#">Link 5</a></li>
    </ul>
  </inag-drawer>
</section>
`;
