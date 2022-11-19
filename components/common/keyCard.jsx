import { FaKey } from 'react-icons/fa'
import CodeBlock from './CodeBlock'

export default function keyCard({ title, downloadLocation, importCommand, keys }) {
    return (
        <div className="max-w-full">
            <div className="bg-gradient-to-r from-rose-400 via-m2-200 to-indigo-500 animate-gradient-xy p-1 rounded-xl">
                <div className="bg-black p-5 md:p-8 border-2 border-transparent rounded-xl">
                    <div className="flex items-center gap-6 mb-5">
                        <FaKey className="text-3xl transition-colors text-m2-200 hover:text-m2-100" />{' '}
                        <h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-m2-200 to-indigo-500 break-all">
                            {title}
                        </h2>
                    </div>
                    <p className="text-neutral-400 overflow-scroll font-mono select-all break-words max-h-[25rem]">{keys}</p>
                </div>
            </div>
            <CodeBlock command={importCommand} />
            <a
                href={downloadLocation}
                download
                className="block w-full bg-gradient-to-r from-rose-400 via-m2-200 to-indigo-500 animate-gradient-x text-white text-center py-3 rounded-lg"
            >
                Download
            </a>
        </div>
    )
}
