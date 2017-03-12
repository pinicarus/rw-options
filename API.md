<a name="Middleware"></a>

# Middleware
A middleware to handle OPTIONS requests.

**Kind**: global class  
<a name="Middleware+enter"></a>

## middleware.enter(request, allowed) ⇒ <code>Response</code> &#124; <code>undefined</code>
Replies to incoming OPTIONS requests.

**Kind**: instance method of <code>[Middleware](#Middleware)</code>  
**Returns**: <code>Response</code> &#124; <code>undefined</code> - A response to the incoming OPTIONS request.  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>ravenwood.Request</code> | The incoming request |
| allowed | <code>Array.&lt;String&gt;</code> | The methods for which routes exist on the incoming request path. |

