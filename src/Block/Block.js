import React from 'react'

function Block() {
    return (
        <div className='max-w-[1400px] mx-auto mt-11'>
            <div className='grid  md:grid-cols-2 sm:grid-cols-1 gap-5'>
                <div className=" p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                    <article>
                        <h2 className="text-xl font-bold">What are the different ways to manage a state in a React application?</h2>
                        <p className="mt-4 dark:text-gray-400">We have to set initial state value inside constructor function and set click event handler of the element upon which click, results in changing state. Then pass the function to the click handler and change the state of the component inside the function using setState.</p>

                    </article>
                </div>


                <div className=" p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                    <article>
                        <h2 className="text-xl font-bold">How does prototypical inheritance work?</h2>
                        <p className="mt-4 dark:text-gray-400">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

                    </article>
                </div>



                <div className=" p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                    <article>
                        <h2 className="text-xl font-bold">What is a unit test? Why should we write unit tests?</h2>
                        <p className="mt-4 dark:text-gray-400">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>

                    </article>
                </div>



                <div className=" p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                    <article>
                        <h2 className="text-xl font-bold">What are the different ways to manage a state in a React application?</h2>
                        <p className="mt-4 dark:text-gray-400">If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.
                            The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.</p>

                    </article>
                </div>
            </div>
        </div>
    )
}

export default Block