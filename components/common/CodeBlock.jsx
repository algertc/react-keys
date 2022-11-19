import { useState } from 'react'
import { BiDollar } from 'react-icons/bi'

export default function CodeBlock({ command, ...props }) {
    const [copyText, setCopyText] = useState('Copy')

    const handleCopy = () => {
        navigator.clipboard.writeText(command)
        setCopyText('Copied!')
        setTimeout(() => {
            setCopyText('Copy')
        }, 2000)
    }

    return (
        <div className="relative">
            <pre
                className="flex items-center gap-x-3 bg-neutral-800 text-base font-mono rounded-lg p-4 my-8 codeblock overflow-x-auto"
                {...props}
            >
                <span>
                    <BiDollar className="text-xl text-magenta-200" />
                </span>
                <code>{command}</code>
                <button
                    className="absolute right-3 transition-colors bg-magenta-200 hover:bg-magenta-300 text-white text-sm px-2 py-1 rounded-md select-none"
                    onClick={handleCopy}
                >
                    {copyText}
                </button>
            </pre>
        </div>
    )
}
