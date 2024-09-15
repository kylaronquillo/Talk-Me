"use client";

import "../App.css";
import { Card } from "flowbite-react";

const Notes = () => {
    return (
        <div className="container-notes">
            <h1 className="appname">My Notes</h1>
            <div className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{ height: '500px', display: 'flex', flexDirection: 'column', }}>
                <Card href="#" className="max-w-sm shadow">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
        </div>
      );
};

export default Notes;