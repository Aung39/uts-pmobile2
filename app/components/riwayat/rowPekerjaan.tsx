import React from "react";

type RowPekerjaanProps = {
  company: string;
  position: string;
  year: string;
  icon: React.ReactNode;
};

export default function RowPekerjaan({
  company,
  position,
  year,
  icon,
}: RowPekerjaanProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="flex-shrink-0">{icon}</div>
      <div className="text-left">
        <h3 className="text-xl font-semibold text-gray-700">{company}</h3>
        <p className="text-gray-500">{position}</p>
        <span className="text-gray-400 text-sm">{year}</span>
      </div>
    </div>
  );
}
