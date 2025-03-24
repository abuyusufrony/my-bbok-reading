import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getWish, setInlocal } from '../../Utilities/SetDb';
import Book2 from '../Book/Book2';

const ListedBooks = () => {
    const [read, setread] = useState([])
    const [get, setget] = useState([])

    const allBooksI = useLoaderData();

    useEffect(() => {

        const storlist = setInlocal();
        const getlist = getWish()

        console.log(storlist, allBooksI)
        const storlistid = storlist.map(id => parseInt(id));
        const getlistid = getlist.map(id => parseInt(id))
        const allgetListed = allBooksI.filter(book => getlistid.includes(book.bookId))

        const allread = allBooksI.filter(book => storlistid.includes(book.bookId))
        setread(allread)
        setget(allgetListed)



    }, [])

    return (
        <div>
            <h2> this item from listed book   </h2>


            <div>

                <Tabs>
                    <TabList>
                        <Tab>Read Book</Tab>
                        <Tab>Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Total Reading Book are {read.length}</h2>

                        {
                            read.map(book => <  Book2 itembooks={book}></Book2>)
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2>Wish Listed {get.length} </h2>
                        {
                            get.map(g => <Book2 itembooks={g}></Book2>)
                        }
                    </TabPanel>
                </Tabs>

            </div>
        </div>
    );
};

export default ListedBooks;