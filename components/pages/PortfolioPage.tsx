import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import CTA from '../sections/CTA';
import EmailScrollCard from '../ui/EmailScrollCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';

const categories = [
  { id: 'featured', label: 'Featured' },
  { id: 'email', label: 'Email Design' },
  { id: 'branding', label: 'Logo & Branding' },
  { id: 'web', label: 'Web Design' },
  { id: 'illustration', label: 'Illustrations' },
  { id: 'social', label: 'Social Media' },
  { id: 'merch', label: 'Merch' },
  { id: 'ads', label: 'Digital Ads' },
];

// Helper to generate multiple items from base images to fill the grid
const generateItems = (baseId: number, category: string, titleBase: string, images: string[], count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: baseId + i,
    category,
    title: i === 0 && category === 'branding' ? 'Logo Design Showcase' : `${titleBase} ${i + 1}`,
    image: images[i % images.length],
    featured: i % 4 === 0 // Mark every 4th as featured for variety
  }));
};

const emailImages = [
  "11cFmW_mmHeDKaX2HkUhA_Lnqx03DXwtp",
  "1rrF4WBQ-CXRAZnE91mEtWrj0RJ_8vuHz",
  "1WTaGDpOLPWdVYSJ0WqrLuH5-bLG1roWx",
  "15Mf1_WZaWdM_fBNjpKgWhidiML45w7BG",
  "10-Vkxm3MuBR8WYJx4fEEdoEU_kpR-8Go",
  "1TUJ3x8KxMBHXJpIbTPGjpVIEjB8gBNlg",
  "1mSZ6jWmKAsxr18_CNlxWtu241WVkx-kh",
  "1acD8kuNgfdK9-3gYoK009Jk35fa_ajD3",
  "1N6SSA22jhlGN8cZJizCLfEQOm5iP0rVH",
  "1qXG-WSCqFBdu35TK6deroOeJUQaCYr0G",
  "1gaQy3PPk1fgvQsK4ItloLkOns7kT-3BU",
  "1BpWeW0L8sYlyeLty9aXfu7xZZF8n2rxI",
  "19iJm6IcRxbSRVmPv1UoEZn9BsZGWDG5u",
  "1yObFx67ETqR_PgS7WjqNBm6bBpU3yH86",
  "1hawK3DrQoKktIyp-UD20pI3nuTbnt9Ch",
  "1bRbKAJXpf5oa8u6taNM_OVElOIGrqs_V",
  "15jDd2OsJuKH5efgRy17bQIEEcLyg1Sa3",
  "1UUqEzfrnoPl1F1baJS3-mfSTc2j5EbrW",
  "1df7g5y_9uWY8z3rLM0Va4hdP0X1zPnk7",
  "1HsOggKIT8VTffPpiZ121VMhs1eg7D8rr",
  "15aIWlpKyc8f2VZTu1X5BzgnEM-rgVU9l",
  "1I1i6KfA7bGTqkZEKf7fGo3RcoPiUneKU",
  "1R9WlLuN-yhzm5hqucTnm8hgABv9Q9afA",
  "1nFDBIWZ6wRs2oJUuLPcycbEkEWlLCOUF",
  "1fsrkcAIQamKFUaqJ1fQDanmYzoIkCvss"
].map(id => `https://lh3.googleusercontent.com/d/${id}`);

const brandingImages = [
  "1whKvGLkCYtKeEWOGzaOeHDuk5sVBkkEr",
  "1XoiLpx_uOxsCAChx16eT9vQb2861JqDk",
  "1wr9pq1Am0UjYhFJgN8sJzD8zbWAy7AVE",
  "1ne8JoTjCiQvFGywfbsQZtn21q1X4UHoK",
  "1rU3RoyvduHb3eQO4_1tWRS-HjV-ERVim",
  "10PG7mBoGuX9BwQL0Qme6qhrWL05imCMM",
  "15x7IHWwWxk2SluevHr-eXJ5du6YzTpjC",
  "1j8IlFmXLgycFKu87abDS7IwY577yyMro",
  "17gNsrDa1s-Q1WIv8Z3qro_Jl8pXGqOJp",
  "1ki5OqTOpdCqVoskDNc47k0ZV799lwwLc",
  "1VYdnuR9sGR9FbvMXpyyHZ484DvrrGXt8",
  "17eBX8jhL5k6dw7KvhqNaXbn2vvZguU1Z",
  "1nncRuoX0FsPLEYI7CTUFh4hP-qV8pUBf",
  "15VC8BD3Foeit2Uzmsl9FlEa_DUqkz0-U",
  "1mUT4zYbUkByhE8VGRh6onkOgBvMRMvcB",
  "1TBybfG0kSdrzcvoRusjJAhXqdb2KYzIu",
  "1UxhASi_LO1X0gif8F9EEsaUsi0fEaPYC",
  "1i9FTqDW_KN3cN3_v_XrS-oKZomBBC-hp",
  "1n_1iQHu5iH6ofyXpZqepCA1tu7MWzD7p",
  "1D64rgp5EsmDZwYsdwefxDGFoMay3PxJB",
  "1csRFzxLwD31x1-kOp6k8bqJYKh04BcHA", 
  "1mHedWhs6tMP_o-_BaL09TCSSVzMYO5pO", 
  "1qSei-_XzbJGuhpwzjc7Mf5XZ44LzGx2V", 
  "1OzrfIrrTR9RXv5r-Vbl7Ig3n9li1I1ar", 
  "https://images.unsplash.com/photo-1572044162444-ad60f128bde7?auto=format&fit=crop&w=800&q=80", 
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80", 
  "13NV8_vBvRJpKfppStW_y63npwdrcotfq", 
  "1HS-2YE-RmSECnEvBtbMXbHAEZ9E0mfJG", 
  "1_1yGcgO4TC0vFNhaAr_ksMHNQ-lC34xQ", 
  "1ZwVMtQ1MwlAoQ6bANhIko5XUR26tqNzY", 
  "1CqbfzzxL-L5l7ZDLnW-c_Tb1Xc7Tpn1H",
  "1gVbaalFGYLidru1FOuBrMrlAmMqWRXIm",
  "1Zu4Jrk9eCM5wjZpZ_1rXYqw2Xl2G1Ytv",
  "1hqgTtk1PpIFYMFSb2m5CWdjzlkI67k_P",
  "1U4Ja4GyQLChkHaNtc-3driQTOX32R0Ly",
  "1DLefeom72YINvOWa-DRAwdC575Be-UuQ",
  "1k1dlN9aW8awB4kXdBzt6iQpeRjKdjXsz",
  "1MBdEMG_qKYmZabKIA_KjGysJVw-fYe4Q",
  "1K5477tvgj_5Pxu-EKtWDy6Oq5plmg8iD",
  "1pvTvodO_LzrLmoUNLFwDyW2U9XOjWG0_",
  "1oyUdj4wM8E0F6S1QCpcbPl-nxHINP_2A",
  "1cXm7JIPq3PC9WCKfg0t-XDD2bVPRPHAs",
  "1EM2HADyhUSRNpQ_SWxUcXMALS30Jki24",
  "1-dYS5jwaadHCwalV8oUNFyG9b1-sUeV9",
  "111cyPFDTGrr0m3eajqmIjV8tgqG5IDVE",
  "1MUKDy5QL2wZJV-kkbXmMCOT_DGyvCDW8",
  "1sBPiOB7rFL8Gd9RotzzbVQqrP9fWumh_",
  "1RjUWW97qvalhjN8dc6SQqfLLUd6ribnn",
  "1SImiRcFW5wHV6d6ppM1ha6V6OQKvwLGG",
  "1Oe6ayimCS_u_O4cr37J7DZgJWDn1o5rm",
  "1fPBLiZLotA1Xa-skCyyji5y1KeRi7wbp",
  "1a5eTVxT2UR7Im3HVHIrwxpqPI-kUj2nC",
  "19b7yv_HHgXyKJUCYWLbwlrvKbca66GiN",
  "1tJ336-llKxlkhBVKl4mM___PCEtN7w2F",
  "1glJ2iwTKhdpUFNaptyYJ4IbduejeIlO1",
  "11dclVLvwocJ-bg8QwstW2j_fTkIg8QjY",
  "1BR4fSuMLGrpE_x9tUxrnIWicwriWgigb",
  "1LRU0dAbcGooDjwHD2zj9-qc-kk9X-8Hc",
  "1Cl2Fz5Rrnf9jOmMizkEgeUlhNBRRw673",
  "1BwL_2Y78SMrI_Fv8AkWE-qvjhOLMNYK8",
  "1UDpyaMvX8RxoSf0Xdy92_FuaUdmdfXzk",
  "1XKCLdHRrK39gJ9LhpeW4ls7ANdeGWz2O",
  "1lFNtcRtQ0k0ZqxXxFDK-57LJeFb9cxGP",
  "1GXPFAFWoOZkhPxBe6C85FWrkk9_dS72M",
  "1z38ANfSExWOmgwEGYsRjX4viDRjRD5Qs",
  "1nvKkgYMCr7jDat4fklv_rWPzAJBS4mhY",
  "1BAYyJALJGn-jql8HFwi8eaqm6GyNqjE4",
  "1PHaxqgrUEBm8RNIaRMyiId0qSzAvWOYy",
  "1B0DqI6Vv1zxJc7RsY_wv_OaEQmMWLtQR",
  "1_bpggUImTK02ibnVp2M-Q2BHk_b2sZya",
  "1X37koILRpcJIZzq-WqISJyZ8mrXz61L3",
  "1Tb1RoxFiezsnLyn-0dLlGqzID0A3osC2",
  "17TdpCE8vfauhEnBQUI0b8F_lsytFV1Jy",
  "1fsQ0xlSdL4t6oB_3fAVOfYpPiAEowE07",
  "1KSA030zskmBMKmSrw5uceIdCEAM96tmJ",
  "1dPGfT7PPLEKM9V2mjb-cinKg0MA9oIMH",
  "17jFPFDXrUlOib2EBm4WSAnWw-hukEH0n",
  "1W23Vc9jpewMEBKDZDfUCjxzv9xUkzW1-",
  "1KFi0xpe9bNzNg5laDJeSZM19dRoQ1hde",
  "1oFsKJoDm9RnWUZ_V83lEDxDFKuAGZgfL",
  "1ggL83dyIKi9HCuknLoJWFmQb74_SOchp",
  "1-NIx_1lWOfmwNRyHBY9ylFxiLiaFsWh4",
  "1tTZeQHErrGsdPAm8DTx8HHOauicCOBtr",
  "199gxP0riMpbFcumbNdlBmtGPpjKBScnU",
  "1zNyJI4G26-c0i8h_3tbdECkmeW4zF37t",
  "1-cZ23eA7rIMa_I2lr7xZ2bEsaqRvoviG"
].map(id => id.startsWith('http') ? id : `https://lh3.googleusercontent.com/d/${id}`);

const webImages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1523206485256-dc5852beca9d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1586717791821-3f44a5638d28?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=800&q=80'
];

const illustrationImages = [
  "15W-28JilDiVB6YRKoYjAMigPvHduWt1t",
  "1-nQds0u1vysN6a-Z-HpYeXNgXYEMhJkN",
  "1F2FZqrlf0e4DLHbRicNEu00-OBitV-4Z",
  "1jDUJemhqL5zaKmQ9QRo1JUvOQRlCvB3J",
  'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1578301978693-85ea9ec2a20c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1579783902614-a3fb39279c0f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1569317002860-e1ab16e7242e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1550684847-75bdda21cc95?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1605106702734-205df224ecce?auto=format&fit=crop&w=800&q=80',
].map(id => id.startsWith('http') ? id : `https://lh3.googleusercontent.com/d/${id}`);

const socialImages = [
  'https://lh3.googleusercontent.com/d/1aCC1t5ihkCy-_jRkQb3fKHzVGDLC1jK7',
  'https://lh3.googleusercontent.com/d/1l2XU5FPp080G8O7Px4P0QVUGO9Tz_cen',
  'https://lh3.googleusercontent.com/d/1qoNKa-7gw3zqirLxtilfqX_YMuPIr1iz',
  'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516251193000-18e658485b1d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1595039838779-f3780873afdd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1520607162513-77705c0f0b4a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1493723843684-a63bc8419371?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1576153192396-4a08225a632c?auto=format&fit=crop&w=800&q=80'
];

const merchImages = [
  "1ki5OqTOpdCqVoskDNc47k0ZV799lwwLc",
  "1wr9pq1Am0UjYhFJgN8sJzD8zbWAy7AVE",
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1556906781-9a412961d289?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80'
].map(id => id.startsWith('http') ? id : `https://lh3.googleusercontent.com/d/${id}`);

const adsImages = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
];

// Combine all into a rich dataset
const allProjects = [
  ...generateItems(100, 'branding', 'Brand Identity', brandingImages, brandingImages.length),
  ...generateItems(200, 'web', 'Web Project', webImages, 12),
  ...generateItems(300, 'illustration', 'Illustration Art', illustrationImages, illustrationImages.length),
  ...generateItems(400, 'social', 'Social Post', socialImages, socialImages.length),
  ...generateItems(500, 'merch', 'Merch Design', merchImages, merchImages.length),
  ...generateItems(600, 'ads', 'Ad Creative', adsImages, 12),
  ...generateItems(700, 'email', 'CUPPINGS Email', emailImages, emailImages.length),
];

const PortfolioPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("featured");

  // Sync with URL params if present
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const isValid = categories.some(c => c.id === categoryParam);
      if (isValid) setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter Logic
  const filteredItems = activeCategory === "featured"
    ? allProjects.filter(item => item.featured)
    : allProjects.filter(item => item.category === activeCategory);

  // Helper to determine link based on active category
  const getCategoryAction = (catId: string) => {
    switch (catId) {
      case 'branding':
        return {
          text: "View Full Project on Behance",
          href: "https://www.behance.net/gallery/186528709/Logo-Design-Unique-Logo-Design-Vol-3",
          icon: <ExternalLink size={20} />
        };
      case 'email':
         return {
          text: "Explore More Email Designs",
          href: "https://zeecreatives.netlify.app/",
          icon: <ExternalLink size={20} />
         };
      case 'web':
        return {
           text: "Start Your Web Project",
           href: "/#book-call",
           icon: <ArrowRight size={20} />
        };
      default:
        return {
          text: "Book a Strategy Call",
          href: "/#book-call",
          icon: <ArrowRight size={20} />
        };
    }
  };

  const action = getCategoryAction(activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300">
      {/* Header Section */}
      <div className="text-center py-24 px-6 bg-white dark:bg-navy-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-5xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8">
            World-Class <span className="text-brand dark:text-brand-glow font-serif italic">Creative</span>, On Demand.
          </h1>
          <p className="text-2xl text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
             Explore a curated collection of high-converting emails, brand identities, and digital assets. 
             Built by the top 1% of creative talent, delivered at the speed of scaling brands.
          </p>
        </motion.div>
      </div>

      {/* Sticky Category Nav */}
      <div className="sticky top-[88px] z-30 bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border-y border-gray-100 dark:border-navy-700 py-6 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 overflow-x-auto custom-scrollbar">
          <div className="flex justify-start md:justify-center min-w-max gap-8 px-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xl font-bold transition-all duration-200 relative pb-2
                  ${activeCategory === cat.id 
                    ? 'text-brand dark:text-brand-glow' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand dark:bg-brand-glow"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Layout - Masonry with dynamic heights */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-20 min-h-[800px]">
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <div key={item.id} className="break-inside-avoid">
                {item.category === 'email' ? (
                  /* Vertical Scroll Card for Emails */
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8"
                  >
                     <EmailScrollCard 
                       src={item.image} 
                       alt={item.title} 
                       aspectRatio="aspect-[1/2]" 
                       className="shadow-md hover:shadow-2xl transition-all duration-300"
                     />
                  </motion.div>
                ) : (
                  /* Dynamic Height Card for others (Logos, Branding, etc) */
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-gray-100 dark:bg-navy-800 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-transparent dark:border-navy-700 mb-8"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <span className="text-white/80 text-base font-bold uppercase tracking-wider mb-2">{categories.find(c => c.id === item.category)?.label}</span>
                      <h3 className="text-white font-bold text-3xl leading-tight">{item.title}</h3>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredItems.length === 0 && (
           <div className="text-center py-40 text-gray-400">
              <p className="text-2xl">No projects found in this category yet.</p>
              <button 
                onClick={() => setActiveCategory('featured')}
                className="text-brand dark:text-brand-glow font-bold mt-6 text-xl hover:underline"
              >
                View Featured Works
              </button>
           </div>
        )}

        {/* Dynamic Action Button at Bottom of Tab */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-20 flex justify-center pb-20 border-t border-gray-100 dark:border-navy-700 pt-16"
        >
          {action.href.startsWith('http') ? (
            <a 
              href={action.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand dark:bg-brand-vivid hover:bg-brand-dark text-white text-xl font-bold py-5 px-10 rounded-full shadow-xl shadow-brand/20 transition-all hover:scale-105"
            >
              {action.text}
              {action.icon}
            </a>
          ) : (
             <Button href={action.href} variant="primary" className="text-xl py-5 px-10 rounded-full shadow-xl">
               <span className="flex items-center gap-3">
                 {action.text}
                 {action.icon}
               </span>
             </Button>
          )}
        </motion.div>
      </div>

      <CTA />
    </div>
  );
};

export default PortfolioPage;