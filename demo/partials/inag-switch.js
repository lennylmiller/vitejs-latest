export const template = /* html */`<h1>inag-switch</h1>
<p>
    On/off switches toggle the state of a single settings option.
</p>

<h3>Usage</h3>
<pre>
    &lt;inag-switch label="switch label"&gt;&lt;/inag-switch&gt;
</pre>

<h3>Attributes</h3>
<ul>
    <li><code>on</code>: empty, toggles the switch when present</li>
    <li><code>label-position</code>: (left|right), position of label (default: right)</li>
</ul>

<h3>Properties</h3>
<ul>
    <li><code>value</code>: Boolean, <code>true</code> when the switch is on, <code>false</code> when the switch is off</li>
</ul>

<h3>Events</h3>
<ul>
    <li><code>change</code>: fired when the radiobutton is checked
        <ul>
            <li>Event detail:
                <ul>
                    <li><code>checked</code>: Boolean, <code>true</code> when switch is on, false when switch is off</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

<h3>Methods</h3>
<ul>
    <li><code>toggle</code>: toggles the switch on and off</li>
</ul>

<h3>Styling</h3>
<ul>
    <li><code>--switch-color</code>: color of the switch, default: #f5f5f5</li>
    <li><code>--track-color</code>: color of the track, default: #bdbdbd</li>
</ul>

<section class="demo">
    <h3>Demo</h3>

    <div class="demo-option">
        <em>standard, label on the right</em>
        <inag-switch label="switch label"></inag-switch>
    </div>

    <div class="demo-option">
        <em>on</em>
        <inag-switch label="switch label" on></inag-switch>
    </div>

    <div class="demo-option">
        <em>label on the left</em>
        <inag-switch label="switch label" label-position="left"></inag-switch>
    </div>
</section>`;
