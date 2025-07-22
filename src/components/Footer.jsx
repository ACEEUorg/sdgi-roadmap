import euLogo from '../eu-logo.png'

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-6">
                    <img
                        src={euLogo}
                        alt="Co-funded by the European Union"
                        className="h-12 w-auto"
                    />
                    <div className="text-sm text-gray-600 text-center max-w-3xl space-y-4">
                        <p>
                            This project has been funded with support from the European Commission under the Grant Agreement Number <strong>2021–1-ES01-KA220-HED-000027588</strong>. This website reflects the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.
                        </p>

                        <p>
                            The reproduction, distribution and utilization by third parties of the products and resources developed by the SDG-iLevel project, or part of them in any of the above ways, is licensed under a <strong><em>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International</em></strong>. It is attributed to the SDG-iLevel Consortium.
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-left mx-auto max-w-prose">
                            <li><strong>No additional restrictions</strong> — You may not apply legal terms or <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#ref-technological-measures" className="text-blue-600 underline hover:text-blue-800 inline">technological measures</a> that legally restrict others from doing anything the license permits.</li>
                            <li><strong>ShareAlike</strong> — If you remix, transform, or build upon the material, you must distribute your contributions under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#ref-same-license" className="text-blue-600 underline hover:text-blue-800 inline">same license</a> as the original.</li>
                            <li><strong>NonCommercial</strong> — You may not use the material for <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#ref-commercial-purposes" className="text-blue-600 underline hover:text-blue-800 inline">commercial purposes</a>.</li>
                            <li><strong>Attribution</strong> — You must give <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#ref-appropriate-credit" className="text-blue-600 underline hover:text-blue-800 inline">appropriate credit</a>, provide a link to the license, and <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#ref-indicate-changes" className="text-blue-600 underline hover:text-blue-800 inline">indicate if changes were made</a>. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.</li>
                        </ul>

                        <p>
                            SDG-iLevel Project © 2025 by SDG-iLevel Consortium is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="text-blue-600 underline hover:text-blue-800 inline">https://creativecommons.org/licenses/by-nc-sa/4.0/</a>
                        </p>

                        <p>
                            <a href="https://www.sdg-ilevel.eu/disclaimer" className="text-blue-600 underline hover:text-blue-800 inline">Disclaimer &amp; Privacy policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
