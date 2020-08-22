import React from 'react';

import Layout from '../components/Layout';


const Face = () => {
    const skinColor = '#ffcc99';
    return (
        <Layout>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g className="face-head">
                    <path fill={skinColor} d="M 50 15
                        C 50 15, 30 15, 25 27.5
                        Q 22.5 35, 22.5 42.5
                        Q 22.5 47.5, 25 55
                        C 25 55, 30 72.5, 40 77.5
                        Q 50 82.5, 60 77.5
                        C 70 72.5, 75 55, 75 55
                        Q 77.5 47.5, 77.5 42.5
                        Q 77.5 35, 75 27.5
                        C 70 15, 50 15, 50 15"
                    />
                    <g className="face-eyes" clipPath="url(#face-eyelids)">
                        <clipPath id="face-eyelids">
                            <path d="M 36 41
                                C 32 41, 30 42.5, 28.5 45
                                C 28 44, 30 49, 36 49
                                C 38 49, 41 48, 43.5 46
                                C 40 42, 37.5 41, 36 41"
                            />
                            <path d="M 64 41
                                C 68 41, 70 42.5, 71.5 45
                                C 72 44, 70 49, 64 49
                                C 62 49, 59 48, 56.5 46
                                C 60 42, 62.5 41, 64 41"
                            />
                        </clipPath>
                        <g className="face-sclerae">
                            <ellipse fill="#fff" rx="7.5" ry="7.5" cx="36" cy="45"/>
                            <ellipse fill="#fff" rx="7.5" ry="7.5" cx="64" cy="45"/>
                        </g>
                        <g className="face-irises">
                            <ellipse fill="#3366ff" rx="3.5" ry="3.5" cx="36" cy="45"/>
                            <ellipse fill="#3366ff" rx="3.5" ry="3.5" cx="64" cy="45"/>
                        </g>
                        <g className="face-pupils">
                            <ellipse fill="#000" rx="1" ry="1" cx="36" cy="45"/>
                            <ellipse fill="#000" rx="1" ry="1" cx="64" cy="45"/>
                        </g>
                    </g>
                    <g className="face-nose">
                        <g className="face-dorsum">
                            <path fill="transparent" d="M 50 42.5
                                C 50 42.5, 47.5 42.5, 47.5 45
                                C 47.5 45, 47.5 50, 46.5 55
                                Q 46 56.5, 45.5 57
                                Q 44.5 58.5, 44.5 59
                                Q 44 61, 45 61
                                C 44.5 61, 46 61.5, 50 61.5
                                C 54 61.5, 55.5 61, 55 61
                                Q 56 61, 55.5 59
                                Q 55.5 58.5, 54.5 57
                                Q 54 56.5, 53.5 55
                                C 52.5 50, 52.5 45, 52.5 45
                                C 52.5 42.5, 50 42.5, 50 42.5"
                            />
                            <path fill={skinColor} d="M 50 42.5
                                C 50 42.5, 47.5 42.5, 47.5 45
                                C 47.5 45, 47.5 50, 46.5 55
                                Q 46 56.5, 45.5 57
                                Q 44.5 58.5, 44.5 59
                                Q 44 61, 45 61
                                C 44 60, 46.5 59, 48 60
                                C 48 60, 49 60.5, 50 60.5
                                C 51 60.5, 52 60, 52 60
                                C 53.5 59, 56 60, 55 61
                                Q 56 61, 55.5 59
                                Q 55.5 58.5, 54.5 57
                                Q 54 56.5, 53.5 55
                                C 52.5 50, 52.5 45, 52.5 45
                                C 52.5 42.5, 50 42.5, 50 42.5"
                            />
                            <path fill="#d09e6f" d="M 50 60.5
                                C 49 60.5, 48 60, 48 60
                                C 46.5 59, 44 60, 45 61
                                Q 46 61.5, 47.5 61.5
                                C 47.5 61.5, 46 61.5, 50 61.75
                                C 54 61.5, 55.5 61, 52.5 61.5
                                Q 54 61.5, 55 61
                                C 56 60, 53.5 59, 52 60
                                C 52 60, 51 60.5, 50 60.5"
                            />
                        </g>
                        <g className="face-nostrils">
                            <path fill="#000" d="M 47 60
                                C 47 60, 46 60, 45.5 60.5
                                C 45 61, 48 61.5, 48 61
                                C 47.5 60, 47 60, 47 60"
                            />
                            <path fill="#000" d="M 53 60
                                C 53 60, 54 60, 54.5 60.5
                                C 55 61, 52 61.5, 52 61
                                C 52.5 60, 53 60, 53 60"
                            />
                        </g>
                    </g>
                    <g className="face-mouth">
                        <path fill="#000" stroke="#e08d6f" d="M 50 67.5
                            A 20 20, 0 0 0, 40 70
                            A 20 20, 0 0 0, 50 72.5
                            A 20 20, 0 0 0, 60 70
                            A 20 20, 0 0 0, 50 67.5 z"
                        />
                    </g>
                </g>
            </svg>
        </Layout>
    );
};


export default Face;
