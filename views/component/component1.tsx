
import * as elements from 'typed-html';

const w = 'world';
export const helloWorld = <p 
data-script="on click call alert('You clicked me!')"
class="text-red-600" 
hx-post="/click" hx-trigger="click" hx-swap="innerHTML"
>
Hello 
<strong>{w}</strong></p>;