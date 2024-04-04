export const template = /* html */`<h1>inag-radiobutton</h1>
<p>
    Radio buttons allow the user to select one option from a set.
</p>

<h3>Usage</h3>
<pre>
    &lt;inag-radiobutton label="Javascript" value="javascript&gt;&lt;/inag-radiobutton&gt;

    &lt;inag-radiobutton-group name="language"&gt;
        &lt;inag-radiobutton slot="radio" label="Javascript" value="javascript"&gt;&lt;/inag-radiobutton&gt;
        &lt;inag-radiobutton slot="radio" label="Typescript" value="typescript"&gt;&lt;/inag-radiobutton&gt;
        &lt;inag-radiobutton slot="radio" label="PHP" value="php" checked&gt;&lt;/inag-radiobutton&gt;
    &lt;/inag-radiobutton-group&gt;
</pre>

<h3>Attributes</h3>
<ul>
    <li><code>label</code>: String, label on the right side of the radiobutton</li>
    <li><code>value</code>: String, value of the radiobutton</li>
    <li><code>checked</code>: empty, setting this attribute will check the radiobutton</li>
</ul>

<h3>Properties</h3>
<ul>
    <li><code>value</code>: Read-only, value of the radiobutton when it is checked, <code>undefined</code> when the 
    radiobutton is not checked. Available on a single radiobutton and on a radiobutton group.</li>

<h3>Events</h3>
<ul>
    <li><code>change</code>: fired when the radiobutton is checked
        <ul>
            <li>Event detail:
                <ul>
                    <li><code>name</code>: String, value of the "name" attribute</li>
                    <li><code>value</code>: String, value of the "value" attribute</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
<h3>Styling</h3>
<ul>
    <li><code>--unchecked-color</code>: color of radiobutton when not checked, default: #999999</li>
    <li><code>--checked-color</code>: color of radiobutton when checked, default: #337ab7</li>
    <li><code>--label-color</code>: color of label, default: #333333</li>
</ul>

<section class="demo">
    <h3>Demo</h3>
    <inag-radiobutton-group name="language">
      <inag-radiobutton slot="radio" label="Javascript" value="javascript"></inag-radiobutton>
      <inag-radiobutton slot="radio" label="Typescript" value="typescript"></inag-radiobutton>
      <inag-radiobutton slot="radio" label="PHP" value="php" checked></inag-radiobutton>
    </inag-radiobutton-group>
</section>`;
