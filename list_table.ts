import format from 'date-fns/format';
import { faker } from '@faker-js/faker/locale/id_ID'

faker.locale = 'id_ID';

const i = 0;

const pegawai = {
    pg_id: i,
    pg_nama: faker.name.findName(),
    pg_nik: faker.phone.phoneNumber('################'),
    pg_alamat: faker.address.streetAddress(),
    pg_no_telp: faker.phone.phoneNumber('+628#########'),
    pg_password: faker.internet.password(),
    pg_bagian: faker.helpers.arrayElement([
        'BAGIAN 1',
        'BAGIAN 2',
        'BAGIAN 3',
      ]),
}

const transaksi_pembelian = {
  t_pembelian_id: i,
  t_pembelian_waktu: format(faker.date.past(1), 'yyyy-MM-dd'),
  t_pembelian_total_harga: faker.commerce.price(),
}

const barang = {
  brg_id: i,
  brg_nama: faker.commerce.product() ,
  brg_harga_jual: faker.commerce.price(),
  brg_harga_beli: faker.commerce.price(),
  brg_berat: faker.random.numeric(),
  jumlah_stok: faker.random.numeric(),
  diskon: faker.random.numeric(),
}