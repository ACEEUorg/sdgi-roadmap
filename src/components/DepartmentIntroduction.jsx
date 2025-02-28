import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const IMAGE_COUNTS = {
    spain: { count: 3, extension: 'jpeg' },
    croatia: { count: 9, extension: 'jpg' },
    lithuania: { count: 5, extension: 'jpg' }
};

const DepartmentIntroduction = ({ introduction, socialLinks, country }) => {
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        const loadPhotos = async () => {
            try {
                const countryConfig = IMAGE_COUNTS[country.toLowerCase()];
                if (!countryConfig) return;

                const photoUrls = [];
                for (let i = 1; i <= countryConfig.count; i++) {
                    const imgPath = `/photos/${country}/img-${i}.${countryConfig.extension}`;
                    photoUrls.push(imgPath);
                }
                setPhotos(photoUrls);
            } catch (error) {
                console.error('Error loading photos:', error);
            }
        };

        if (country) {
            loadPhotos();
        }
    }, [country]);

    return (
        <section className="my-8 p-6 bg-slate-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <div className="prose max-w-none space-y-4">
                {introduction.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            {photos.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Photo Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => setSelectedPhoto(photo)}
                            >
                                <img
                                    src={photo}
                                    alt={`Photo ${index + 1}`}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedPhoto && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <img
                            src={selectedPhoto}
                            alt="Selected photo"
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {socialLinks && socialLinks.length > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-200">
                    <h3 className="text-lg font-semibold mb-2">Department Links</h3>
                    <div className="flex flex-wrap gap-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className="text-sky-700 hover:text-sky-800 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

DepartmentIntroduction.propTypes = {
    introduction: PropTypes.string.isRequired,
    socialLinks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })),
    country: PropTypes.string
};

export default DepartmentIntroduction; 