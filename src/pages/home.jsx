import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import WhatsappImage from "/assets/images/whatsap-bg.png";

function Home() {
  const [kebutuhan, setKebutuhan] = useState("izin_tidak_hadir");
  const [namaDosen, setNamaDosen] = useState("[Nama Dosen]");
  const [namaMahasiswa, setNamaMahasiswa] = useState("[Nama Mahasiswa]");
  const [nimMahasiswa, setNimMahasiswa] = useState("[NIM]");
  const [kelasJurusanAngkatan, setKelasJurusanAngkatan] = useState(
    "[Kelas, Jurusan, angkatan]"
  );
  const [tanggal, setTanggal] = useState("[Tanggal]");
  const [alasan, setAlasan] = useState("[Alasan]");

  function btnKebutuhan(params_kebutuhan) {
    setKebutuhan(params_kebutuhan);
  }

  function copyToClipboard() {
    let textToCopy = "";

    if (kebutuhan === "izin_tidak_hadir") {
      textToCopy = `Assalamualaikum Wr. Wb./Selamat pagi/siang/sore Bapak/Ibu ${namaDosen}, 
      Perkenalkan, nama saya ${namaMahasiswa} dengan nim ${nimMahasiswa} dari kelas ${kelasJurusanAngkatan}. 
      Saya ingin meminta izin untuk tidak hadir kelas pada tanggal ${tanggal} karena ${alasan}.`;
    } else {
      textToCopy = `Assalamualaikum Wr. Wb./Selamat pagi/siang/sore Bapak/Ibu ${namaDosen}, 
      Perkenalkan, nama saya ${namaMahasiswa} dari kelas ${kelasJurusanAngkatan}. 
      Saya ingin bertemu pada ${tanggal} karena ${alasan}. Apakah Bapak/Ibu bersedia meluangkan waktu 
      untuk bertemu atau membahasnya melalui pertemuan online? Terima kasih atas perhatian dan waktu yang diberikan.`;
    }

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Teks berhasil disalin!",
          text: "Template teks telah disalin ke clipboard.",
          timer: 2000,
          showConfirmButton: false,
        });
        localStorage.setItem("namaMahasiswa", namaMahasiswa);
        localStorage.setItem("nimMahasiswa", nimMahasiswa);
        localStorage.setItem("kelasJurusanAngkatan", kelasJurusanAngkatan);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Gagal menyalin!",
          text: "Terjadi kesalahan saat menyalin teks.",
        });
      });
  }

  useEffect(() => {
    const storedNamaMahasiswa = localStorage.getItem("namaMahasiswa");
    const storedNimMahasiswa = localStorage.getItem("nimMahasiswa");
    const storedKelasJurusanAngkatan = localStorage.getItem(
      "kelasJurusanAngkatan"
    );

    if (storedNamaMahasiswa) setNamaMahasiswa(storedNamaMahasiswa);
    if (storedNimMahasiswa) setNimMahasiswa(storedNimMahasiswa);
    if (storedKelasJurusanAngkatan)
      setKelasJurusanAngkatan(storedKelasJurusanAngkatan);
  }, []);

  return (
    <section className="section-sofun">
      <div className="container bg-slate-900 h-fit mx-auto">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="left-side w-full">
            <div className="content p-6">
              <form className="form-wrapper">
                <div className="form-group mb-4">
                  <label
                    className="block text-gray-200 text-sm font-bold mb-2"
                    htmlFor="nama_dosen"
                  >
                    Nama Dosen
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                    id="nama_dosen"
                    name="nama_dosen"
                    type="text"
                    placeholder="Nama Dosen"
                    value={namaDosen}
                    onChange={(e) => setNamaDosen(e.target.value)}
                  />
                </div>

                <div className="form-group mb-4">
                  <label
                    className="block text-gray-200 text-sm font-bold mb-2"
                    htmlFor="nama_mahasiswa"
                  >
                    Nama Mahasiswa
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                    id="nama_mahasiswa"
                    name="nama_mahasiswa"
                    type="text"
                    placeholder="Nama Mahasiswa"
                    value={namaMahasiswa}
                    onChange={(e) => setNamaMahasiswa(e.target.value)}
                  />
                </div>

                <div className="form-group mb-4">
                  <label
                    className="block text-gray-200 text-sm font-bold mb-2"
                    htmlFor="nim_mahasiswa"
                  >
                    NIM Mahasiswa
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                    id="nim_mahasiswa"
                    name="nim_mahasiswa"
                    type="text"
                    placeholder="NIM Mahasiswa"
                    value={nimMahasiswa}
                    onChange={(e) => setNimMahasiswa(e.target.value)}
                  />
                </div>

                <div className="form-group mb-4">
                  <label
                    className="block text-gray-200 text-sm font-bold mb-2"
                    htmlFor="kelas_jurusan_angkatan"
                  >
                    Kelas, Jurusan, Angkatan
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                    id="kelas_jurusan_angkatan"
                    name="kelas_jurusan_angkatan"
                    type="text"
                    placeholder="Kelas, Jurusan, Angkatan"
                    value={kelasJurusanAngkatan}
                    onChange={(e) => setKelasJurusanAngkatan(e.target.value)}
                  />
                </div>

                <div className="flex gap-3 mb-4">
                  <div className="cta w-full">
                    <button
                      onClick={() => btnKebutuhan("izin_tidak_hadir")}
                      type="button"
                      className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-b-0 hover:border-green-500 rounded"
                    >
                      Izin Tidak Hadir
                    </button>
                  </div>
                  <div className="cta w-full">
                    <button
                      onClick={() => btnKebutuhan("izin_bertemu")}
                      type="button"
                      className="w-full bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-b-0 hover:border-purple-500 rounded"
                    >
                      Izin Bertemu
                    </button>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label
                    className="block text-gray-200 text-sm font-bold mb-2"
                    htmlFor="tanggal"
                  >
                    Tanggal
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                    id="tanggal"
                    name="tanggal"
                    type="text"
                    placeholder="Tanggal"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                  />
                </div>

                <div className="form-group mb-4">
                  <label
                    className="block text-gray-200 text-sm font-bold mb-2"
                    htmlFor="alasan"
                  >
                    Alasan
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                    id="alasan"
                    name="alasan"
                    type="text"
                    placeholder="Alasan"
                    value={alasan}
                    onChange={(e) => setAlasan(e.target.value)}
                  />
                </div>

                <div className="cta">
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-b-0 hover:border-blue-500 rounded"
                  >
                    Copy
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="right-side bg-slate-900 w-fit">
            <div className="content">
              <div className="preview-wrapper w-full relative">
                <div className="preview-text w-full p-6 absolute">
                  <div className="text-card bg-green-500 text-white rounded-2xl p-3 max-w-xs shadow-lg relative">
                    {kebutuhan === "izin_tidak_hadir" ? (
                      <p className="text-sm font-medium">
                        Assalamualaikum {namaDosen}, Perkenalkan, nama saya{" "}
                        {namaMahasiswa} dengan nim {nimMahasiswa} dari kelas{" "}
                        {kelasJurusanAngkatan} . Saya ingin meminta izin untuk
                        tidak hadir kelas pada tanggal {tanggal} karena {alasan}
                        .
                      </p>
                    ) : (
                      <p className="text-sm font-medium">
                        Assalamualaikum Wr. Wb. {namaDosen}, Perkenalkan, nama
                        saya {namaMahasiswa} dari kelas {kelasJurusanAngkatan}.
                        Saya ingin menyampaikan bahwa saya ingin bertemu pada{" "}
                        {tanggal} karena {alasan}. Apakah Bapak/Ibu bersedia
                        meluangkan waktu untuk bertemu atau membahasnya melalui
                        pertemuan online? Saya bersedia menyesuaikan jadwal
                        dengan waktu luang Bapak/Ibu. Atas perhatian dan waktu
                        yang diberikan, saya ucapkan terima kasih.
                      </p>
                    )}
                  </div>
                </div>
                <div className="image">
                  <img
                    className="w-full h-full"
                    src={WhatsappImage}
                    alt="sofun assets"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
