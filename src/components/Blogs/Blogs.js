import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Difference between javascript and nodejs</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">JavaScript</th>
                        <th scope="col">Node Js</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>JavaScript is a Programming Language. It running in any web browser with proper browser engine.</td>
                        <td>It is an interpreter and environment for JavaScript with specific useful libraries which javaScript programming can use separately</td>
                    </tr>
                    <tr>
                        <td>Mainly useing for any client side activity for a web applocation, like possible attribute validation or refreshing the page in specific interval or provide sone dynamic changes in web pages without refreshing the page</td>
                        <td>It mainly using for accessing or performing any non-blocking operation of any operating system, like creating of executing shell Script of accessing any hardware specific information of running any backend job.</td>
                    </tr>
                    <tr>
                        <td>JavaScript running any engine like Spider monkey (Fire Fox), javaScript core(Safari), V8(Google Chrome)</td>
                        <td>Node js Only run in V8 engine which mainly Using by google chrome And JavaScirpt program which will be written under this Node Js Will Always run in V8 Engine</td>
                    </tr>
                </tbody>
            </table>
            <h1 className='text-center mt-5'>When should you use nodejs and when should you use mongodb?</h1>
            <p>MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily. There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS.</p>
            <h1 className='text-center mt-5'>Differences between sql and noSql databases.</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">SQL Databases</th>
                        <th scope="col">NoSQL Databases</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>Tables with fixed rows and columns</td>
                        <td> JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges</td>
                    </tr>
                    <tr>
                        <td>
                            Developed in the 1970s with a focus on reducing data duplication</td>
                        <td> MongoDB and CouchDB, Key-value: Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune</td>
                    </tr>
                    <tr>
                        <td>General purpose</td>
                        <td>
                             general purpose, Key-value: large amounts of data with simple lookup queries, Wide-column: large amounts of data with predictable query patterns, Graph: analyzing and traversing relationships between connected data</td>
                    </tr>
                </tbody>
            </table>
            <h1 className='text-center mt-5'>What is the purpose of jwt and how does it work</h1>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
        </div>
    );
};

export default Blogs;