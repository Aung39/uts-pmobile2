import React from "react";
import RowPekerjaan from "./rowPekerjaan";
import { Briefcase } from "lucide-react"; // Menggunakan ikon lucide-react sebagai contoh

export default function RiwayatPekerjaan() {
  return (
    <div className="container mx-auto p-4 text-center">
      <div className="container mx-auto p-4 text-center pt-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-400">
          Riwayat Pekerjaan
        </h2>
      </div>
      <div className="space-y-6">
        <RowPekerjaan
          company="StartUp XYZ"
          position="Frontend Developer Intern"
          year="2020 - 2021"
          icon={<Briefcase className="w-8 h-8 text-blue-500" />}
        />
        <RowPekerjaan
          company="PT Teknologi Modern"
          position="Software Engineer"
          year="2021 - 2022"
          icon={<Briefcase className="w-8 h-8 text-green-500" />}
        />
        <RowPekerjaan
          company="PT Maju Mundur"
          position="Junior Developer"
          year="2022 - 2023"
          icon={<Briefcase className="w-8 h-8 text-purple-500" />}
        />
        <RowPekerjaan
          company="CV Kreatif"
          position="Web Developer"
          year="2023 - Sekarang"
          icon={<Briefcase className="w-8 h-8 text-yellow-500" />}
        />
      </div>
    </div>
  );
}
