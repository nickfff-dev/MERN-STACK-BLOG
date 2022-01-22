Following are the basic points to note about REACT



1. FOLDER STRUCTURE

gitignore file

    It is used by Git to determine which files and directories to ignore before a commit is made.

    It should be committed into the repository to share ignore rules with other users who clone the repository.

    The node_modules  folder is included inside the .gitignore file so that the user who clones the application is not required to clone this folder. The user simply needs to run the command `npm install`
    in the root folder of the project. This command creates the node_modules folder and installs all the dependencies (packages) needed for the application.

    

package.json file

    It consists of the name and version of the application, the combination of which should be unique in order to publish the package.

    It comprises of dependencies that list all the packages needed to be installed for the application.

    It also includes scripts that specify the commands to be run at various points in the application lifecycle.

 

package-lock.json file

    It is automatically generated for any operation where npm modifies either the node_modules  tree or the package.json  file.

    It locks the version of the full dependency tree of packages.

    It guarantees the generation of an identical dependency tree when the application is cloned by other developers.

 

node_modules folder

    Its contents are defined by the package.json file and it consists of all the packages required for running your application.

 

public folder

    Nothing inside this folder is processed by Webpack.

    It is used for keeping small files that are not required to be bundled.

    It can be used to contain images when there are thousands of them, and their paths need to be referenced dynamically.

    Any file inside this folder needs to be referenced at other places using the %PUBLIC_URL%/  keyword, which gets replaced with the path of the public folder during the application's build process.

 

index.html file

    It is the starting point of the application.

    It should always remain with the name index.html and inside the public folder; otherwise, the code will fail to run.

    It can only reference files that are inside the public  folder.

 

manifest.json file

    It is a simple JSON file telling the browser about the web application and how the application should behave when it is installed on the user’s mobile device or computer.

 

src folder

    It consists of the real application code.

    It consists of all the files that are needed to get bundled by Webpack.

 

index.js file

    It is the entry point for JavaScript.

    The filename should remain index.js and the location should be inside the src folder; otherwise, the code will not run.

 
index.css file

    It is the stylesheet for index.html.

 

registerServiceWorker.js file

    It is the web browser API that is used to cache assets and other files to work passively in the background. It helps offline users or the ones who are on the slow network to see results on the screen faster.

    It adds offline capabilities to the application.

 

App.js file

    It is the JavaScript file for the App component.

 

App.css file

    It is the stylesheet for the App component.

 

App.test.js file

    It is the test file for the App component.

    It contains unit tests for the application.

    It runs test cases for all the files that changed since the last commit of the application.

 

logo.svg file

    SVG is an acronym for Scalable Vector Graphics.

    An SVG file is an XML-based vector image format for 2D graphics with support for interactivity and animation.

    It is similar to raster-based image formats such as JPEG, PNG, BMP, GIF, etc.

    It offers a bandwidth-friendly way of rendering images; no matter how large a graphic gets, it transmits only the XML describing the graphic to the client.

    It helps to render resolution-independent and SEO-friendly images.

    It makes up the icon for your application and appears alongside the title in the browser tab.

    It gets saved along with the bookmark.


2. JSX

To summarise, though JSX is HTML-looking syntax, it is actually XML extension to ECMAScript specification. Thus, instead of using pure JavaScript for building DOM elements, you can use JSX, which offers flexibility to developers to use a familiar syntax, viz. HTML.


        differences between HTML and JSX:

        

        1. Adjacent JSX elements must be wrapped in an enclosing tag

        While returning JSX from a function or a class, you cannot return multiple elements. You can return only a single element. This is the reason why you need to encompass all children elements within a parent element and then, return this parent element. In case you fail to do this, you’ll get a syntax error saying, “Adjacent JSX elements must be wrapped in an enclosing tag”. However, in HTML, you can return as many DOM elements as you want. You do not have any rule of returning a single element.

        

        Note that with the introduction to React 16, one can return an array consisting of multiple elements existing at the same level. These elements are separated from each other using a comma. Thus, one can write the following code snippet, which works fine in React 16:

        

            return [
            <div>
                Phone Directory
            </div>,
            <button>Add</button>,
            <div>
                <span>Name</span>
                <span>Phone</span>
            </div>
            ]


        However, when React released its v16.2, it introduced Fragment, which allows you to return multiple elements. You can reference Fragment, as mentioned below:

        

            import { Fragment } from 'react';


        After including Fragment as a named import from the ‘react’ library, you can wrap multiple elements inside it. At last, the entire Fragment enclosing multiple elements can be returned. Thus, you can simply write the following code snippet:

        

            return (
            <Fragment>
                <div>
                    Phone Directory
                </div>
                <button>Add</button>
                <div>
                    <span>Name</span>
                    <span>Phone</span>
                </div>
            </Fragment>
            )


        2. Closing tag required

        In JSX, you need to close both types of tags — opening-closing tags as well as self-closing tags. For an opening tag, you need to explicitly write a closing tag at the end. For a self-closing tag, you need to put a forward slash before the closing angular bracket. If you fail to do this, you’ll get a syntax error saying, “Expected corresponding JSX closing tag for <br>”.

        

        However, in HTML, the browser sometimes takes care of closing the tags by itself. Don’t believe it? Try creating a simple webpage (HTML page) in which you write a paragraph tag inside the body tag. This paragraph consists of the text “Hello World”. Don’t close this paragraph tag. What I’m talking about looks something like this:

        

            <p>Hello World</P>

        Now, run this on your browser. What do you see? Amazed?

        

        3. JSX properties are not similar to HTML attributes

        Some attributes that you use in HTML cannot be used as JSX properties. You can see the entire list of such attributes here. This is due to the reason that all of the JSX code gets converted to JavaScript code at the end. You know that JavaScript has its own set of keywords. If you try to write these keywords or reserved words as JSX properties, it gets confusing to identify when the word is being used as a JavaScript keyword (or reserved word) and when it is being used as a JSX property. To make this distinction, use alternative keywords in JSX for those HTML attributes, which exist in JavaScript language.

        

        4. Case sensitiveness

        React ‘reacts’ to cases that you use! It doesn’t allow you to write something in any case that you want. On the other hand, HTML syntax is not case sensitive. You can choose to write the div tag as <DIV>, <div> or <Div>. Well, can you do the same in React? A big NO.



3. TEMPLATE LITERALS
    
    curly braces {} are used as a special syntax in React. This can be used to evaluate a JavaScript expression during compilation. The expression can be a variable, a function, an object, an arithmetic calculation, logical evaluation, or any code snippet that returns some value.

    

        Example:

        

        Code Snippet:

        let moduleName="React";
        <span>Learning {moduleName} is so much fun!</span>


        Output:

        Learning React is so much fun!



4. React.createElement() method

        React.createElement(element_name, element_properties, children);
        The first argument in this method is the name of the element that is to be rendered. This can be either your custom component or an HTML element. The second argument is the object that consists of property-value pairs that can be provided as attributes to this component or element. After these two arguments, you can pass an infinite number of children elements, which will be nested inside this main component or element. These children can, in turn, have other children elements nested inside them.

        The first argument is mandatory, while the rest of the arguments that follow are optional.

        

        how JSX code gets converted to JavaScript code using React.createElement(). 
        One such example is given below:

        

            JSX code:

            <div id="module">
            <p>ReactJS</p>
            </div>


            JavaScript code:

            React.createElement("div", {id: "module"},
            React.createElement("p", null, "ReactJS")
            );



5. ReactDOM.render() METHOD

    There must be two arguments in the ReactDOM.render() method.

    The first argument of the ReactDOM.render() method tells you what is to be rendered. This does not mean that only one element can be rendered in the first argument. Multiple elements can be rendered by enclosing them inside a parent div container. Also, this argument does not necessarily have to be a component. This argument can also take JSX code directly.

    The second argument of the ReactDOM.render() method can be anything that specifies a location on the DOM, where the element(s) in the first argument need to be rendered.


6. COMPONENTS
    
    there are two types of components in React — functional components and class components. 
    As the names suggest, functional components are written in the form of functions 
    class components are written in the form of classes.

        FUNCTIONAL COMPONENT
        import React from 'react';

        const Header = function() {
        return (
            <div className="header">
                Phone Directory
            </div>
        )
        }

        CLASS COMPONENT
        import React, { Component } from 'react';

        class Header extends Component {
        render() {
            return (
                <div className="header">
                    Phone Directory
                </div>
            )
        }
        }

    A component’s name must start with a capital letter in order to distinguish between the predefined HTML elements and the custom elements (components) created by users. An example can be: MyComponent


    A class component must extend from a base class named Component. For this, you also need to import REACT from ‘react’ library.
        A class component must always have a render() function.

        import React, {Component} from 'react';

        class MyComponent extends Component {
        render() {
            // code here
        }
        }


        A component must always return something.

        import React from 'react';

        class MyComponent extends Component {
        render() {
            return (
                // code here
            )
        }
        }

    This returned value is the content that is actually rendered into the DOM; it replaces the name of the component. In case you miss the return statement in a functional component, you will get an error saying, “Nothing was returned from render. This usually means a return statement is missing.”. On the other hand, if you miss a return statement inside the render() function in a class component, you get an error saying, “Your render method should have return statement”.
    If you do not wish to return anything, you can return null from the component, as written below:

        return null;

    In any case, the return statement needs to be mandatorily written, no matter whether you wish to return anything or not.

    

    In order to reference a component written in a separate file, you need to first export the component from the file where it has been defined and then import the component in the required file where it needs to be used.
    

    A component can have a file extension as  .js  or  .jsx.
    

    In case of components where the file extension is .js or .jsx, the extension is not required to be explicitly mentioned while writing the import statement.
    For example, you can skip mentioning the file extension while writing the import statement when the Header file has the extension ‘.js’ or ‘.jsx’.

        import Header from './Header';

    However, for all other files, the extension should also be mentioned along with the file name while writing the import statement. Let’s say there’s a logo file with .svg extension, then you would need to mention the file extension when importing the logo file, as written below:

        import logo from './logo.svg';

    In React, you ought to write reusable code snippets; this is one of the recommended coding guidelines in software development. Thus, using components saves you the trouble of rewriting redundant code at multiple places. This is why React is all about components.

 
7. STYLING

    Approach 1 - Directly writing style alongside JSX:

        <div style={{textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase'}}>
        Phone Directory
        </div>


    Approach 2 - Moving style as constant object:

        const headerStyle = {
        textAlign: 'center',
        padding: 20,
        background: '#000',
        color: '#fff',
        textTransform: 'uppercase'
        };

        <div style={headerStyle}>
        Phone Directory
        </div>


Inline Styling

    It allows you to write styles in the same line with the element or component. This is why it is called ‘inline’ styling.
    

    The style  property is used with the element or component to be rendered into the DOM.
    

    The style  property accepts a JavaScript object enclosed in curly braces.
    

    Two curly braces are used with the style property — one to evaluate the expression inside the JSX code and the other to represent a JavaScript object, which is taken as input by the style  property.

        <div style={{}}>
        Phone Directory
        </div>
​​​

    The property names look like CSS property names, but they are not exactly like them. These names are actually JavaScript identifiers; they can be considered as the keys (or properties) of a JavaScript object.
 

    The property names must be written in camelCase. Unlike CSS, hyphens are not allowed in JSX because the JSX code gets converted to JavaScript code, and hyphens are not allowed in JavaScript identifiers.

        <div style={{textTransform: 'uppercase'}}>
        Phone Directory
        </div>

    This is the reason why textTransform is written in camelCase in JSX unlike text-transform in CSS. In case you fail to follow this, you will get an error saying “Uncaught SyntaxError: Inline Babel script: Unexpected token”.
 

    The property values look like CSS property values, but they are not exactly like them. These values can be considered the values corresponding to the keys (or properties) in a JavaScript object. Since all the values in JavaScript must be of a valid datatype, care must be taken regarding each value correctly mapping to a valid datatype in JavaScript.

        <div style={{background: '#000'}}>
        Phone Directory
        </div>

    This is the reason why '#000' is written inside quotes, because it corresponds to a string value. In CSS, you must write it without quotes in order to make it work.
 

    All property-value pairs are separated using the comma operator. The reason is that the style  property accepts a JavaScript object where a comma should be used in contrast to a CSS style, where a semicolon is used instead.
 

    When a component or element is styled by moving out style as a constant object, only one pair of curly braces is used in the style property. 

 

External Styling

    Write all the styles in an external stylesheet. This is similar to writing external CSS.
    

    Import this stylesheet in the file where the component or element is defined on which you want to apply the given style. Note that since the extension of a stylesheet is .css (not equivalent to .js or .jsx), you need to specify the file extension while writing the import statement for a stylesheet.


8. PROPS

    Props help you to pass values from a parent component to a child component so that they can be accessed within the child component.

 

    Props in a functional component:  

    A functional component accepts a parameter called props from the parent component. This parameter is an object that holds all the properties passed from the parent component to the child component. In place of props, you can use any other parameter name too.

 

        Example:

        const Organization = function(props) {
        return (
            <div>
                <h1>{props.name}</h1>
            <h3>{props.tagline}</h3>
            </div>
        )
        }

        <Organization name="UpGrad" tagline="Building Careers of Tomorrow"/>


 

    Props in a class component:

    The properties passed from the parent component can be accessed using this.props keyword. Note that in class components, you need to use the keyword props only, unlike the case in functional components where any parameter name can be used to represent the props of the component.

 

        Example:

        class Organization extends Component {
        render() {
            return (
                <div>
                    <h1>{this.props.name}</h1>
                    <h3>{this.props.tagline}</h3>
                </div>
            )
        }
        }

        <Organization name="UpGrad" tagline="Building Careers of Tomorrow"/>


9. EVENTS

    an event is an action to be taken as a result of user interactions. An event handler is a method to be called when an event occurs. A programmer can define a series of steps inside an event handler, which can be followed when the specified event occurs.
    An event name should follow camelCase.

    It is a good practice to prefix event handlers with on, such as ‘onSubmitOrder’, or suffix them with handler, such as ‘submitOrderHandler’. This is done so as to make clear what these handlers do and what events they are attached to.


10. STATE

    state is something that is controlled within a component, unlike props, which are controlled by a parent component. Also, a change in state calls the render() method again. render() method is present only inside a class component because a class component extends from the Component class, which acts as the base class. This is the reason why class components are termed ‘stateful’.
    This also leads to the conclusion that functional components cannot contain state because they do not extend from the Component base class and, thus, do not have any render() method.  This is why they are termed ‘stateless’.
    
11. ROUTING

    Routing is the process that helps in loading partial content, making it a dire need for building SPAs. Based on the URL that a user visits, specific content is loaded on the page, which helps in displaying different content to the users without any need for the page refresh. This is when the users get to see the entire application in the form of a single page though it consists of multiple pages.

    In order to implement Routing in your application, you’ll be using a node package called ‘react-router-dom’. This package provides React components to simulate server-side router handling. This package provides a BrowserRouter component, which you’ll be using in your application.
    npm install react-router-dom
