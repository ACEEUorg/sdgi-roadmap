import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps";
import { PatternLines } from "@vx/pattern";

const mapConfig = {
    colors: {
        stroke: '#0EA5E9',        // sky-500
        patternStroke: '#0C4A6E', // sky-900
        patternBg: '#FEF9C3',     // yellow-100
        border: '#0284C7',        // sky-600
        defaultFill: '#FEF9C3',   // yellow-100
        hoverFill: '#FDE047',     // yellow-300
        pinFill: '#082F49',       // sky-950
        pinStroke: '#E0F2FE',     // sky-100
        text: '#082F49'           // sky-950
    }
};

const highlighted = ["LTU", "ESP", "HRV"];

const countryRoutes = {
    "ESP": "spain",
    "LTU": "lithuania",
    "HRV": "croatia"
};

const MapChart = () => {
    const navigate = useNavigate();
    const [features, setFeatures] = useState(null);

    useEffect(() => {
        fetch('/features.json')
            .then(response => response.json())
            .then(data => setFeatures(data))
            .catch(error => console.error('Error loading map data:', error));
    }, []);

    if (!features) {
        return <div>Loading map...</div>;
    }

    return (
        <div className="w-full md:w-[500px] md:float-right md:ml-8 mb-8 border border-b-2 border-sky-600 rounded-3xl overflow-hidden">
            <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                    rotate: [-10.0, -52.0, 0],
                    scale: 850,
                    center: [-5, -3]
                }}
            >
                <PatternLines
                    id="lines"
                    height={6}
                    width={6}
                    orientation={["diagonal"]}
                    className="stroke-1 stroke-sky-900 bg-sky-100"
                />
                <Geographies
                    geography={features}
                    className="stroke-sky-500 stroke-[0.5px]"
                >
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const isHighlighted =
                                highlighted.indexOf(geo.id) !== -1;
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={
                                        isHighlighted
                                            ? "url('#lines')"
                                            : mapConfig.colors.defaultFill
                                    }
                                    style={{
                                        default: {
                                            outline: "none"
                                        },
                                        hover: {
                                            outline: "none",
                                            fill: isHighlighted ? mapConfig.colors.hoverFill : mapConfig.colors.defaultFill,
                                            cursor: isHighlighted ? "pointer" : "default"
                                        },
                                        pressed: {
                                            outline: "none"
                                        }
                                    }}
                                    onClick={() => {
                                        if (isHighlighted) {
                                            navigate(`/${countryRoutes[geo.id]}`);
                                        }
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>
                <Annotation
                    subject={[23.4052, 55.3985]} // Kaunas coordinates
                    dx={0}
                    dy={0}
                >
                    {/* Map pin for Kaunas */}
                    <MapPin size={16} fill={mapConfig.colors.pinFill} color={mapConfig.colors.pinStroke} />
                    <text x={-13} y={37} className="fill-sky-950 text-xl font-bold">
                        Kaunas
                    </text>
                </Annotation>

                <Annotation
                    subject={[2.15899, 42.6]} // Girona coordinates
                    dx={0}
                    dy={0}
                >
                    {/* Map pin for Girona */}
                    <MapPin size={16} fill={mapConfig.colors.pinFill} color={mapConfig.colors.pinStroke} />
                    <text x={15} y={16} className="fill-sky-950 text-xl font-bold">
                        Girona
                    </text>
                </Annotation>

                <Annotation
                    subject={[13.9926, 45.9871]} // Rijeka coordinates
                    dx={0}
                    dy={0}
                >
                    {/* Map pin for Rijeka */}
                    <MapPin size={16} fill={mapConfig.colors.pinFill} color={mapConfig.colors.pinStroke} />
                    <text x={-14} y={-2} className="fill-sky-950 text-xl font-bold">
                        Rijeka
                    </text>
                </Annotation>
            </ComposableMap>
        </div>
    );
};

export default MapChart; 