import React from 'react';

const Output = ({
    loading,
    error,
    output,
}: {
    loading: boolean;
    error: string;
    output: string;
}) => {
    return (
        <div className="w-full h-full bg-gray-900 border-t-2 border-r-2 border-b-2 border-white p-4 overflow-auto text-white">
            {loading ? (
                <div className="text-yellow-400 animate-pulse">Running code...</div>
            ) : error ? (
                <div className="text-red-500 whitespace-pre-wrap">Error: {error}</div>
            ) : output ? (
                <div className="whitespace-pre-wrap">{output}</div>
            ) : (
                <div className="text-gray-400">No output to display.</div>
            )}
        </div>
    );
};

export default Output;
