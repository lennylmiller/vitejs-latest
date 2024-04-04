export const template = /* html */`<h1>inag-table</h1>
<p>
    Tables are used to display data and to organize it. Optionally, it provides sortable columns and pagination.
</p>

<h3>Usage</h3>
<pre>
    &lt;inag-table sortable="language scope" per-page="2"&gt;&lt;/inag-table&gt;

<code><em>
    customElements.whenDefined('inag-table')
        .then(() => {
            const table = document.querySelector('inag-table');

            table.data = [
                {
                    id: 1,
                    language: 'Javascript',
                    scope: 'Frontend'
                },
                {
                    id: 2,
                    language: 'PHP',
                    scope: 'Backend'
                },
                {
                    id: 3,
                    language: 'Scala',
                    scope: 'Backend'
                },
                {
                    id: 4,
                    language: 'CSS',
                    scope: 'Frontend'
                }
            ];
        });
</em>
</code>
</pre>

<h3>Attributes</h3>
<ul>
    <li><code>sort</code>: String, column to sort and sort order, space-delimited (e.g. 'name asc')</li>
    <li><code>sortable</code>: String: space-delimited list of sortable colums (e.g. 'name street city')</li>
    <li><code>per-page</code>: Number, number of items to show per page, this will show pagination controls when the
        total number of items is greater than this value
    </li>
</ul>

<h3>Properties</h3>
<ul>
    <li><code>data</code>: Object[], data to be rendered by the table. The keys of the object will be uses as column 
    names</li>
</ul>
 


<h3>Styling</h3>
<ul>
    <li><code>--row-hover-color</code>: background color of a row when hovered, default: #eeeeee</li>
    <li><code>--row-selected-color</code>: background color of a row when selected, default: #f5f5f5</li>
    <li><code>--checkbox-unchecked-color</code>: color of row checkbox when not checked, default: #999999</li>
    <li><code>--checkbox-checked-color</code>: color of row checkbox when checked, default: #337ab7</li>
</ul>


<section class="demo">
    <h3>Demo</h3>

    <div class="demo-option">
        <em>with sortable columns language and scope</em>
        <inag-table sortable="language scope"></inag-table>
    </div>

    <div class="demo-option">
        <em>with sortable columns and pagination</em>
        <inag-table sortable="language scope" per-page="2"></inag-table>
    </div>
</section>

`;
