/*




  Talking points

  HTTP - Hyper Text Transfer Protocol
  * The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web, and is used to load webpages using hypertext links
  * Think of HTML
    * HTML is the standard markup language for creating Web pages

  HTTPS - Hyper Text Markup Language
  * Same as HTTP but uses SSL to encrypt request and responses
  * Far more secure

  What is hyper text?
  * Hypertext is text which is not constrained to be linear.
  * Hypertext is text which contains links to other texts ie: hyper links

  Request - Response cycle
  * The Request-Response Cycle is a fundamental concept in web development, describing the process by which a client (usually a web browser) requests information from a server, and the server responds with the requested data.

  Request
    * request line
    * header
    * body

  Response
    * status line
    * header
    * body


  ======== REQUEST ========
  * sending information to the server to perform some kind of action

  Request includes
    * 1. Request line
    * 2. Header
    * 3. Body

  1. Request Line
    * Request line made up of 3 parts
       ex: POST / HTTP / 1.0

    - METHOD / URI / HTTP Version

    1. Method: POST
      * could be GET, DELETE, PUT, PATCH, POST

    2. URI (Uniform Resource Indicator) - /
      * / root resource
      * / appacademy.io

      A URI consists of the URL and URN
      * URL - Location
      * URN - Name

    3. HTTP Version: 1.0
      * either 1.1 or 2

  2. Header
    * key:value pairs containing data on how the server will process the request
    ex:
    * KEY : VALUE
    * Host: appacademy.io
    * Content-Length: 31
    * Content-Type: application/x-www-form-urlencoded

    Common content types
    *  application/x-www-form-urlencoded
      - info submitted directly from an HTML web form
    *  application/json	JSON
      - data format similar to JavaScript objects
    *  multipart/form-data
      - info submitted from an HTML web form with multiple media types


  3. Body
  * For data that doesnt fit in the header
    ex: submitting a form username and password
    ex: username=azure&password=hunter2

   * GET and DELETE do not a need a body
  ! Important to to set a content type if using a body so the server knows how to interpret the request body


  Request will includes a method

  5 Common HTTP Verbs
    * CRUD
     - create, read, update, destroy

    GET - read
      * retrieving resources from the server
      * only require that the server return a resource.
      * Do not require a body
      * data is shared via url

    POST - create
      * creating new resources on the server.
        * ex: submitting a form, uploading an image
      * can have a body
        * will contain data server needs to make the request
      * ex: username + password, comment, image

    PUT - update
      * update a resource
      * can have a body
      * contains data needed to update resource
        * ex: updating username
        * will need userId, email, password, new name etc all resources needed to make the update

    PATCH - update
      * update a resource
      * They are very similar to PUT requests, but do not require the whole resource to perform the update.
      * can have a body
      * PATCH request would only require your new name, not the rest of your account details, to succeed.
        * put may require more information

    DELETE - destroy
      * DELETE requests destroy resources on the server.
      * These requests can have a body, BUT it's traditionally not recommended to include one.
      * These might be saved database records, like removing a product that's sold out, or more ephemeral resources, like logging a user out of their current session.
      ! usually DELETE and GET do not have body - only need when sending information


     ========  RESPONSE  ========
    * A web server delivers content via responses
    * An HTTP response contains either the content requested or an explanation of why that content couldn't be delivered

    Response includes
    * 1. status line
    * 2. header
    * 3. body


    1. Status line
    * similar to request
    * status-line (instead of a request-line)
    * status-line made up of 3 parts
      ex: HTTP / 1.1 200 OK

    - HTTP version /  Status-Code / Reason-Phrase

      1. HTTP Version: 1.0
        * either 1.1 or 2

      2. Status code
        * status of the response
        * will go into more detail on status code below

      2. Reason - phrase
        * More information on the status code

    2. Header
      * headers that provide helpful metadata about the response
      * Headers on HTTP responses work identically to those on requests. They establish metadata that the receiving client might need to process the response.
      * Content-Type - Just like the Content-Type header of a request, the Content-Type header of a response lets the client know the format of the response body data and how to process it..

      Here are some common MIME types for the Content-Type header of a response:
        * MIME type	meaning
        * text/html	HTML document
        * text/css	CSS styles document
        * text/javascript	JavaScript script
        * text/plain	plain text
        * image/png	PNG Image
        * application/json	JSON - data format similar to JavaScript object

    3. Body
      * Assuming a successful request, the body of the response contains the resource you've requested.
      * Content type in the header specifies type of content to return from request
      * Headers may change how the browser handles the body, but they won't modify the body's content.


    STATUS CODES

    - Status codes 100 - 199: Informational
    - Status codes 200 - 299: Successful
      * 200 OK: Request received and fulfilled. These usually come with a body that contains the resource you requested.
      * 201 Created: Your request was received and a new record was created as a result. You'll often see this response to POST requests.
    - Status codes 300 - 399: Redirection
      * 301 Moved Permanently: The resource you requested is in a totally new location.
      * 302 Found: Similarly, to 301 Moved Permanently, this indicates that a resource has moved. However, this code is used to indicate a temporary move.

      ! 301 Moved Permanently and 302 Found often get confused. When should you use a 302 Found? The most common use case today is for the transition from HTTP to HTTPS. HTTPS is secure HTTP messaging, where requests & responses are encrypted so they can't be read by prying eyes while en route to their destinations.

      ! status code 302 may be used when redirecting users from a http to https versioning which is more secure
        * ex: its okay to keep navigating to http://our-website.com, but you're going to redirect them to https://our-website.com for their protection.


      - Status codes 400 - 499: Client Error
        * 400 Bad Request: Whoops! The server received your request, but couldn't understand it.
        * 401 Unauthorized: The resource you requested may exist, but you're not allowed to see it without authentication.
        * 403 Forbidden: The resource you requested may exist, but you're not allowed to see it at all.
          ! not used often as it gives hint to info they shoudnt see, usually use 404 instead
        * 404 Not Found: The resource you requested doesn't exist.
          * ex: A well-known example is GitHub. If you try to open a repository you don't have permission to access, GitHub will return a 404 Not Found even if your URL is correct! This protects you from random users guessing the names of your projects.

      - Status codes 500 - 599: Server Error
        * This range of response codes are the Web's way of saying "It's not you, it's me."
        * 500 Internal Server Error: Your request was received, and the server tried to process it, but something went awry!
        * 504 Gateway Timeout: Your request was received but the server didn't respond in a reasonable amount of time.
          ? what 500 status code you should return if your API is temporarily down for maintenance.



      Here's the flow of how a typical form submission goes:
      * Form is submitted
      * Browser makes request to the server
      * Server parses the request body and does some CRUD action with the data
      * Server sends a redirection response
      * Browser receives response
      * Browser redirects user to the path specified in the Location header of the response

*/




/*

  RESTful Routes
  * ReST stands for REpresentational State Transfer.
  * REST is a convention for defining endpoints that other developers can easily understand how the server may process requests with those endpoints and what they should expect from their responses.

  Routes vs. Endpoints
  * A route is the URL path for a request.
  * An endpoint is a pattern for a request that has a specific route and HTTP verb combination to define how the server should process the request and what the response is expected to look like.
  * Endpoints are used to distinguish different types of requests from each other.

  * Here are some examples of endpoints vs. routes:
      - Endpoint: GET /users, Route: /users
      - Endpoint: POST /users, Route: /users
      - Endpoint: POST /session, Route: /session
  ! endpoint just includes the verb

  Route Parameters
  * A route parameter is a named segment of the URL path that acts as a placeholder for a changeable part of the path. Route parameters are used to generalize routes to a certain pattern.
  * Route parameters are indicated in the URL path by a colon, :, followed by the name of the variable part of the path.
  ex: URL PATH -  /tweets/17
  ex: Route parameter - /tweets/:tweetId
  *  :tweetId is parameter for 17
  ! The generic URL path of /tweets/:tweetId represents routes starting with /tweets/ and ending in an id (e.g. /tweets/aefe116d-352b-41c2-a5bb-fc74365f2697).

  Rules of ReST
  * ReST (Representational State Transfer) is an architecture style for designing networked applications. To be clear, ReST is not an official standard. Instead, it's a set of rules/constraints.

  ReST defines six architectural constraints,
    * Decoupled client-server: The client and the server should be decoupled so that they can evolve separately without any dependence on one another.
    * Stateless: This means that there is no necessary session between the client and the server. Data received from the server can be used by the client independently. This allows you to have short discrete operations. Luckily, this is a natural fit for HTTP operations in which requests are intended to be independent and short-lived.
    * Uniform interface: RESTful endpoints are meant to be self-describing and uniform in their definition. Each operation is intended to be separated by a separate endpoint or URL

   Two kinds of URLs: Collection vs. Singular
    * ones that point at collections of resources
    * A path that combines a plural noun (the resource name)
      /invoices would represent a collection of invoices that you're allowed to see
      /people would represent the people in the application that you're allowed to see
      /houses would represent a collection of houses

    * ones that point at single resources.
    ! a record identifier represents a single resource in your application.
      /invoices/PK-200201 would represent the single invoice that has the the invoice number PK-200201 (record id)
      /people/10103 would represent the single person with id 10103 (record id)
      /houses/bdfa5ef9-0c86-4810-bc13-10415250af09 would represent the house with the specific globally unique record identifier bdfa5ef9-0c86-4810-bc13-10415250af09

      ex: user/tweets/tweetId

      brandon/tweets/1
      maica/tweets/2
      brandon/home
      maica/home

    * The endpoints that return HTML can follow a RESTful concept. However, you are limited to just using the verbs GET and POST. Hyperlinks, or just links, and URL path changes on the browser perform GET requests.

      /resource-name	GET	Index page: Get an HTML-based list of the resource
      /resource-name/new	GET	Create form page: Show a form to create a new record for the resource
      /resource-name	POST	Submit create form: Create a new record for the resource
      /resource-name/:record-id	GET	Detail page: See the details of the specified record
      /resource-name/:record-id/edit	GET	Edit form page: Show the edit form for the specified record
      /resource-name/:record-id	POST	Submit edit form: Update the specified record
      /resource-name/:record-id/delete	POST	Submit delete form: Delete the specified record

      /my/tweets	GET	Index page: Get an HTML-based list of your tweets
      /my/tweets/new	GET	Create form page: Show a form to create a new tweet
      /my/tweets	POST	Submit create form: Create a new tweet
      /my/tweets/17	GET	Detail page: See the details of your tweet with the id of 17
      /my/tweets/17/edit	GET	Edit form page: Show the edit form for your tweet with the id of 17
      /my/tweets/17/edit	Submit edit form: Update the tweet with the submitted details
      /my/tweets/17/delete	POST	Submit delete form: Delete your tweet with the id of 17


    Nesting Resources
    * Sometimes a resource is dependent on another resource or requires the information of another resource to perform the request. The route path should include the information about the desired resource and the required resource.

    * You can add resources to routes to create nested resources. The URL path can consist of multiple collections and singular resources.

    * Path Pattern	HTTP Verb	Meaning
    /resource-name/:record-id/nested-resource	GET	Index page: Get an HTML-based list of the nested resource related to the specified record
    /resource-name/:record-id/nested-resource/new	GET	Create form page: Show a form to create a new record for the nested resource related to the specified record
    /resource-name/:record-id/nested-resource	POST	Submit create form: Create a new record for the nested resource related to the specified record
    /nested-resource/:nested-record-id	GET	Detail page: See the details of the specified nested resource's record
    /nested-resource/:nested-record-id/edit	GET	Edit form page: Show the edit form for the specified nested resource's record
    /nested-resource/:nested-record-id	POST	Submit edit form: Update the specified nested resource's record
    /nested-resource/:nested-record-id/delete	POST	Submit delete form: Delete the specified nested resource's record


*/
