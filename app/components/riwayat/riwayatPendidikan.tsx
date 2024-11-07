import React from "react";
import RowRiwayat from "./rowRiwayat";
import { GraduationCap } from "lucide-react"; // Menggunakan ikon lucide-react

export default function RiwayatPendidikan() {
  return (
    <div className="container mx-auto p-4 text-center">
      <div className="container mx-auto p-4 text-center pt-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-400">
          Riwayat Pendidikan
        </h2>
      </div>
      <div className="space-y-6">
        <RowRiwayat
          level="SMP"
          name="SMPN 1 Cikancung"
          year="2017 - 2019"
          icon={<GraduationCap className="w-8 h-8 text-blue-500" />}
        />
        <RowRiwayat
          level="SMK (TKJ)"
          name="SMK Bhakti Ilham"
          year="2019 - 2022"
          icon={<GraduationCap className="w-8 h-8 text-green-500" />}
        />
        <RowRiwayat
          level="Prodi Sistem Informasi"
          name="Ma'soem University"
          year="2022 - Sekarang"
          icon={<GraduationCap className="w-8 h-8 text-purple-500" />}
        />
      </div>
    </div>
  );
}
