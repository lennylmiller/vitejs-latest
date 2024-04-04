export const template = /* html */`<h1>inag-slider</h1>
<p>
  Sliders let users select from a range of values by moving the slider thumb.
</p>

<h3>Usage</h3>
<pre>
    &lt;inag-slider value="68" max="100"&gt;&lt;/inag-slider&gt;
</pre>

<h3>Attributes</h3>
<ul>
  <li><code>value</code>: Number, current value of the slider</li>
  <li><code>min</code>: Number, minimum value of the slider</li>
  <li><code>max</code>: Number, maximum value of the slider</li>
  <li><code>step</code>: Number, granularity of the slider</li>
</ul>

<h3>Properties</h3>
<ul>
  <li><code>value</code>: Number, current value of the slider</li>
  <li><code>disabled</code>: empty, disables the slider</li>
</ul>

<h3>Events</h3>
<ul>
  <li><code>change</code>: fired when the slider is dragged
    <ul>
      <li>Event detail:
        <ul>
          <li><code>value</code>: String, current slider value</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h3>Styling</h3>
<ul>
  <li><code>--thumb-color</code>: color of the thumb, default: #cccccc</li>
  <li><code>--thumb-size</code>: size of the thumb, default: 16px</li>
  <li><code>--track-color</code>: color of the track, default: #cccccc</li>
  <li><code>--track-height</code>: height of the track, default: 4px</li>
  <li><code>--margin</code>: margin of the slider, default: 5px</li>
</ul>

<section class="demo">
  <h3>Demo</h3>
  <div class="demo-option">
    <em>standard</em>
    <inag-slider value="68" max="100"></inag-slider>
  </div>

  <div class="demo-option">
    <em>with step="10"</em>
    <inag-slider value="60" max="100" step="10"></inag-slider>
  </div>
</section>
`;
