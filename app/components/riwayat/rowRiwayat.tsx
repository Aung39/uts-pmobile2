import React from "react";

type RowRiwayatProps = {
  level: string;
  name: string;
  year: string;
  icon: React.ReactNode;
};

export default function RowRiwayat({
  level,
  name,
  year,
  icon,
}: RowRiwayatProps) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="flex items-center space-x-4">
        {icon}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{level}</h3>
          <p className="text-gray-500">{name}</p>
        </div>
      </div>
      <span className="text-gray-400 text-sm">{year}</span>
    </div>
  );
}
