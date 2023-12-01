/* eslint-disable quotes */
const Laporan = {
  async render() {
    return `
    <section class="py-8 lg:py-12">
    <div class="container mx-auto my-auto">
      <div class="text-left mb-6">
        <h1 class="text-red-600 text-opacity-90 text-4xl lg:text-5xl font-bold font-Poppins">
          Suara Anda, Langkah Awal Perubahan: Laporkan, Dengarkan, Selesaikan!
        </h1>
      </div>
  
      <div class="flex justify-center">
        <div class=" lg:w-[1162px] relative bg-white rounded-[20px] shadow border border-black">
          <!-- Konten atau isi yang ingin Anda masukkan ke dalam kotak ini -->
          <form class="p-4 lg:p-8 flex flex-col items-center">
            <input type="text" placeholder="Judul Laporan * " id="judul_laporan" name="judul_laporan" class="text-black text-lg h-[74px] font-normal font-Poppins border-2 border-black rounded-sm px-2 py-1 w-full lg:max-w-[800px] mb-2">
            
            <input type="text" placeholder="Rincian Laporan * " id="rincian_laporan" name="rincian_laporan" class="text-black text-lg h-[222px] font-normal font-Poppins border-2 border-black rounded-sm px-2 py-1 w-full lg:max-w-[800px] mb-2">
            
            <input type="date" placeholder="Tanggal Kejadian * " id="tanggal_kejadian" name="tanggal_kejadian" class="text-black text-lg h-[74px] font-normal font-Poppins border-2 border-black rounded-sm px-2 py-1 w-full lg:max-w-[800px] mb-2">
            
            <button id="lokasi_kejadian" class="text-black text-lg h-[74px] font-normal font-Poppins border-2 border-black rounded-sm px-2 py-1 w-full lg:max-w-[800px] mb-2 transition duration-300 ease-in-out hover:bg-gray-200 hover:border-gray-400" type="button">
            Lokasi Kejadian *
            </button>
                     
            <input type="file" class="text-black text-2xl font-bold font-['Poppins'] h-[74px] font-normal font-Poppins border-2 border-black rounded-sm px-2 py-1 w-full lg:max-w-[800px] mb-2">
            <div class="text-black text-base font-normal font-['Poppins']">Upload Lampiran (Max 2 MB)</div>
            
            <button id="submitBtn" class="lg:w-96 h-16 px-36 pt-5 pb-4 bg-pink-900 rounded-2xl shadow justify-start items-center inline-flex mt-4">
            <div class="text-center text-white text-xl font-bold font-['Poppins']">NYOKLAPOR!</div>
          </button>
            <div id="confirmationPopup" class="w-96 h-60 relative bg-gray-800" style="display: none;">
            <div class="left-[118px] top-[61px] absolute text-stone-300 text-xl font-bold font-['Poppins']">Apakah kamu yakin ?</div>
              <div class="w-96 h-px left-0 top-[132px] absolute border-2 border-black border-opacity-90"></div>
              <div class="px-5 pt-1.5 pb-2 left-[138px] top-[160px] absolute bg-pink-900 bg-opacity-90 rounded-lg justify-center items-center inline-flex">
                <div class="text-stone-300 text-base font-bold font-['Poppins']">TIDAK</div>
              </div>
              <div class="w-20 px-7 pt-1.5 pb-2 left-[227px] top-[160px] absolute bg-white rounded-lg justify-center items-center inline-flex">
                <div class="text-pink-900 text-opacity-90 text-base font-bold font-['Poppins']">IYA</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  
  
    `;
  },

  async afterRender() {
    document.addEventListener("DOMContentLoaded", () => {
      const submitBtn = document.getElementById('submitBtn');
      const popup = document.getElementById('confirmationPopup');

      // Menambahkan event listener saat tombol ditekan
      submitBtn.addEventListener('click', () => {
        // Menampilkan popup
        popup.style.display = 'block';
      });

      // Menambahkan event listener untuk tombol 'IYA'
      document.querySelector('#confirmationPopup .bg-white').addEventListener('click', () => {
        // Menyembunyikan popup saat 'IYA' ditekan
        popup.style.display = 'none';
      });

      // Menambahkan event listener untuk tombol 'TIDAK'
      document.querySelector('#confirmationPopup .bg-pink-900').addEventListener('click', () => {
        // Menyembunyikan popup saat 'TIDAK' ditekan
        popup.style.display = 'none';
      });
    });
  },
};

export default Laporan;
