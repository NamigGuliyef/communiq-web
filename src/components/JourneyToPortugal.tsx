"use client";

import React, { useEffect, useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Line,
    Marker,
} from "react-simple-maps";

const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMapPath() {
    const [fromCountry, setFromCountry] = useState(null);
    const [fromData, setFromData] = useState(null);
    const toData = {
        coords: [-8.0, 39.5],
        flag: "https://flagcdn.com/pt.svg"
    }


    useEffect(() => {
        fetch("https://ipwho.is/")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setFromCountry(data.country_code);
                }
            })
            .catch((err) => console.error("Failed to get location:", err));
    }, []);

    useEffect(() => {
        if (fromCountry) {
            fetch(`https://restcountries.com/v3.1/alpha/${fromCountry}`)
                .then((res) => res.json())
                .then((data) => {
                    const country = data[0];
                    setFromData({
                        coords: [country.latlng[1], country.latlng[0]], // [lon, lat]
                        flag: country.flags.svg,
                    });
                });
        }
    }, [fromCountry]);

    return (
        <div
            style={{
                width: "100%",
                height: "400px",
                userSelect: "none"
            }}
        >
            <ComposableMap
                style={{
                    backgroundColor: '#0e87cc'
                }}
                projection="geoMercator">
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#EAEAEC"
                                stroke="#D6D6DA"
                                style={{
                                    default: { outline: "none" },
                                    hover: { outline: "none" },
                                    pressed: { outline: "none" },
                                }}
                                pointerEvents="none"
                            />
                        ))
                    }
                </Geographies>

                {/* 3️⃣ Draw path + flag markers */}
                {fromData && toData && (
                    <>
                        {/* Green dotted line */}
                        <Line
                            from={fromData.coords}
                            to={toData.coords}
                            stroke="#22c55e"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                        />

                        {/* From marker (flag in circle) */}
                        <Marker coordinates={fromData.coords}>
                            <image
                                href={fromData.flag}
                                x={-12}
                                y={-12}
                                width={24}
                                height={24}
                                clipPath="circle(12px at 12px 12px)"
                            />
                        </Marker>

                        {/* To marker (Portugal flag) */}
                        <Marker coordinates={toData.coords}>
                            <image
                                href={toData.flag}
                                x={-12}
                                y={-12}
                                width={24}
                                height={24}
                                clipPath="circle(12px at 12px 12px)"
                            />
                        </Marker>
                    </>
                )}
            </ComposableMap>
        </div>
    );
}
