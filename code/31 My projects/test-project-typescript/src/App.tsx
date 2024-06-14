import React, {Fragment} from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './App.css';
import RootLayout from "./page/Root";
import ErrorPage from "./page/Error";
import HomePage from "./page/Home";
import Messages from "./components/Messages";
import Friends from "./components/Friends";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {
                path: 'messages',
                element: <Messages/>,
                // action: sendMessage
                // children: [
                //   {
                //     index: true,
                //     element: <EventsPage />,
                //     loader: eventsLoader,
                //   },
                //   {
                //     path: ':eventId',
                //     id: 'event-detail',
                //     loader: eventDetailLoader,
                //     children: [
                //       {
                //         index: true,
                //         element: <EventDetailPage />,
                //         action: deleteEventAction,
                //       },
                //       {
                //         path: 'edit',
                //         element: <EditEventPage />,
                //         action: manipulateEventAction,
                //       },
                //     ],
                //   },
                //   {
                //     path: 'new',
                //     element: <NewEventPage />,
                //     action: manipulateEventAction,
                //   },
                // ],
            },
            {
                path: 'friends',
                element: <Friends/>
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
