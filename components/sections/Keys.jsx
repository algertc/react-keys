import KeyCard from '../common/keyCard'
import keys from '../../data/keys'

export default function Keys() {
    return (
        <section className="py-14 md:py-20">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-28 lg:gap-10 text-lg font-semibold">
                    {keys.map((key, i) => (
                        <KeyCard
                            key={i}
                            title={key.title}
                            downloadLocation={key.downloadLocation}
                            importCommand={key.importCommand}
                            keys={key.key}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
