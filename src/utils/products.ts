export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

// All products from Sofas page (IDs: 1-122)
const sofasProducts: Product[] = [
  { id: 1, name: 'Ribbed Chunky Beige Sofa', price: 3500, image: '/Images/Sofas/1.jpg', category: 'sofas' },
  { id: 2, name: 'Sleek Cream Multi-Pillow Sofa', price: 5500, image: '/Images/Sofas/2.jpg', category: 'sofas' },
  { id: 3, name: 'Broad Corduroy Beige Sofa', price: 4200, image: '/Images/Sofas/3.jpg', category: 'sofas' },
  { id: 4, name: 'Rounded Modular Mist Sofa', price: 2800, image: '/Images/Sofas/4.jpg', category: 'sofas' },
  { id: 5, name: 'Boxy White Boucle Sofa', price: 3800, image: '/Images/Sofas/5.jpg', category: 'sofas' },
  { id: 6, name: 'Tan Velvet Low-Back Sofa', price: 6200, image: '/Images/Sofas/6.jpg', category: 'sofas' },
  { id: 7, name: 'White L-Shaped Modular Sofa', price: 3200, image: '/Images/Sofas/7.jpg', category: 'sofas' },
  { id: 8, name: 'Sandy Linen Sofa with Ottoman', price: 4500, image: '/Images/Sofas/8.jpg', category: 'sofas' },
  { id: 9, name: 'Deep-Seat Cloud White Sofa', price: 2900, image: '/Images/Sofas/9.jpg', category: 'sofas' },
  { id: 10, name: 'Cream Sectional and Ottoman Set', price: 5800, image: '/Images/Sofas/10.jpg', category: 'sofas' },
  { id: 11, name: 'Grey Textured L-Shape Sofa', price: 4100, image: '/Images/Sofas/11.jpg', category: 'sofas' },
  { id: 12, name: 'Tan Ribbed Grand Sectional', price: 5200, image: '/Images/Sofas/12.jpg', category: 'sofas' },
  { id: 13, name: 'Corduroy Beige Legged Sofa', price: 3600, image: '/Images/Sofas/13.jpg', category: 'sofas' },
  { id: 14, name: 'Plush Off-White Corner Sofa', price: 3400, image: '/Images/Sofas/14.jpg', category: 'sofas' },
  { id: 15, name: 'Modern Beige L-Sofa', price: 6400, image: '/Images/Sofas/15.jpg', category: 'sofas' },
  { id: 16, name: 'Chunky Cream Multi-Cushion Sofa', price: 3100, image: '/Images/Sofas/16.jpg', category: 'sofas' },
  { id: 17, name: 'Minimalist White Low Sectional', price: 3500, image: '/Images/Sofas/17.jpg', category: 'sofas' },
  { id: 18, name: 'Grey Boucle Corner Sofa', price: 5500, image: '/Images/Sofas/18.jpg', category: 'sofas' },
  { id: 19, name: 'Grand Beige Texture Sofa', price: 4200, image: '/Images/Sofas/19.jpg', category: 'sofas' },
  { id: 20, name: 'Slim Grey Linear Sofa', price: 2800, image: '/Images/Sofas/20.jpg', category: 'sofas' },
  { id: 21, name: 'White Rounded Modular Lounger', price: 3800, image: '/Images/Sofas/21.jpg', category: 'sofas' },
  { id: 22, name: 'Classic Cream Sofa with Ottoman', price: 6200, image: '/Images/Sofas/22.jpg', category: 'sofas' },
  { id: 23, name: 'Long Low-Profile Beige Sofa', price: 3200, image: '/Images/Sofas/23.jpg', category: 'sofas' },
  { id: 24, name: 'Deep Square White Modular Sofa', price: 4500, image: '/Images/Sofas/24.jpg', category: 'sofas' },
  { id: 25, name: 'Soft-Edge Beige Textured Sofa', price: 2900, image: '/Images/Sofas/25.jpg', category: 'sofas' },
  { id: 26, name: 'Sleek Arctic White Modular Sofa', price: 5800, image: '/Images/Sofas/26.jpg', category: 'sofas' },
  { id: 27, name: 'Light Grey Corduroy Sofa', price: 4100, image: '/Images/Sofas/27.jpg', category: 'sofas' },
  { id: 28, name: 'Chunky Tan Ribbed Sectional', price: 5200, image: '/Images/Sofas/28.jpg', category: 'sofas' },
  { id: 29, name: 'Textured Grey Mixed-Pillow Sofa', price: 3600, image: '/Images/Sofas/29.jpg', category: 'sofas' },
  { id: 30, name: 'Mist Grey Modular Sectional', price: 3400, image: '/Images/Sofas/30.jpg', category: 'sofas' },
  { id: 31, name: 'Oversized Beige Comfort Sectional', price: 6400, image: '/Images/Sofas/31.jpg', category: 'sofas' },
  { id: 32, name: 'Windowside Ribbed Off-White Sofa', price: 3100, image: '/Images/Sofas/32.jpg', category: 'sofas' },
  { id: 33, name: 'Cream Legged Sofa Set', price: 3500, image: '/Images/Sofas/33.jpg', category: 'sofas' },
  { id: 34, name: 'Beige Corduroy Sectional', price: 5500, image: '/Images/Sofas/34.jpg', category: 'sofas' },
  { id: 35, name: 'Chunky Grey Textured L-Sofa', price: 4200, image: '/Images/Sofas/35.jpg', category: 'sofas' },
  { id: 36, name: 'Slate Grey Minimalist Sectional', price: 2800, image: '/Images/Sofas/36.jpg', category: 'sofas' },
  { id: 37, name: 'Clean-Line Beige Modular Sofa', price: 3800, image: '/Images/Sofas/37.jpg', category: 'sofas' },
  { id: 38, name: 'Thin-Leg Grey L-Sofa', price: 6200, image: '/Images/Sofas/38.jpg', category: 'sofas' },
  { id: 39, name: 'Ribbed White Modular Sectional', price: 3200, image: '/Images/Sofas/39.jpg', category: 'sofas' },
  { id: 40, name: 'Grey Ribbed Corner Sofa', price: 4500, image: '/Images/Sofas/40.jpg', category: 'sofas' },
  { id: 41, name: 'Cream Duo Modular Sofa', price: 2900, image: '/Images/Sofas/41.jpg', category: 'sofas' },
  { id: 42, name: 'Zen Low-Profile White Sofa', price: 5800, image: '/Images/Sofas/42.jpg', category: 'sofas' },
  { id: 43, name: 'Grand Grey Textured Sectional', price: 4100, image: '/Images/Sofas/43.jpg', category: 'sofas' },
  { id: 44, name: 'White Soft-Back Boucle Sofa', price: 5200, image: '/Images/Sofas/44.jpg', category: 'sofas' },
  { id: 45, name: 'Long Linear Beige Sofa', price: 3600, image: '/Images/Sofas/45.jpg', category: 'sofas' },
  { id: 46, name: 'Plush Grey Corner Sectional', price: 3400, image: '/Images/Sofas/46.jpg', category: 'sofas' },
  { id: 47, name: 'White High-Cushion L-Sofa', price: 6400, image: '/Images/Sofas/47.jpg', category: 'sofas' },
  { id: 48, name: 'Off-White Legged Sofa & Ottoman', price: 3100, image: '/Images/Sofas/48.jpg', category: 'sofas' },
  { id: 49, name: 'Rounded White Modular Lounger II', price: 3500, image: '/Images/Sofas/49.jpg', category: 'sofas' },
  { id: 50, name: 'Cream Modular Block Sofa', price: 5500, image: '/Images/Sofas/50.jpg', category: 'sofas' },
  { id: 51, name: 'Woven Sand Extended Sofa', price: 4200, image: '/Images/Sofas/51.jpg', category: 'sofas' },
  { id: 52, name: 'Bohemian Linen Sectional', price: 2800, image: '/Images/Sofas/52.jpg', category: 'sofas' },
  { id: 53, name: 'Waffle Weave White Sofa', price: 3800, image: '/Images/Sofas/53.jpg', category: 'sofas' },
  { id: 54, name: 'Arctic Block Ottoman Set', price: 6200, image: '/Images/Sofas/54.jpg', category: 'sofas' },
  { id: 55, name: 'Plush Taupe Cloud Sectional', price: 3200, image: '/Images/Sofas/55.jpg', category: 'sofas' },
  { id: 56, name: 'Charcoal Corduroy Corner Sofa', price: 4500, image: '/Images/Sofas/56.jpg', category: 'sofas' },
  { id: 57, name: 'Soft Pebble Grey Modular', price: 2900, image: '/Images/Sofas/57.jpg', category: 'sofas' },
  { id: 58, name: 'Minimalist Cream Twin Set', price: 5800, image: '/Images/Sofas/58.jpg', category: 'sofas' },
  { id: 59, name: 'Modern Slate Geometric Set', price: 4100, image: '/Images/Sofas/59.jpg', category: 'sofas' },
  { id: 60, name: 'Textured Silver Corner Sofa', price: 5200, image: '/Images/Sofas/60.jpg', category: 'sofas' },
  { id: 61, name: 'Curve-Arm Cream Duo', price: 3600, image: '/Images/Sofas/61.jpg', category: 'sofas' },
  { id: 62, name: 'Midnight Suede Diamond Sectional', price: 3400, image: '/Images/Sofas/62.jpg', category: 'sofas' },
  { id: 63, name: 'Moss Green Low Modular', price: 6400, image: '/Images/Sofas/63.jpg', category: 'sofas' },
  { id: 64, name: 'Cloud Haven Ivory Sectional', price: 3100, image: '/Images/Sofas/64.jpg', category: 'sofas' },
  { id: 65, name: 'Jumbo Grey Corduroy Set', price: 3500, image: '/Images/Sofas/65.jpg', category: 'sofas' },
  { id: 66, name: 'Simple Ash Block Sofa', price: 5500, image: '/Images/Sofas/66.jpg', category: 'sofas' },
  { id: 67, name: 'Velvet Sage Sectional', price: 4200, image: '/Images/Sofas/67.jpg', category: 'sofas' },
  { id: 68, name: 'Vanilla Corduroy Ottoman Set', price: 2800, image: '/Images/Sofas/68.jpg', category: 'sofas' },
  { id: 69, name: 'Onyx Velvet Corner Sofa', price: 3800, image: '/Images/Sofas/69.jpg', category: 'sofas' },
  { id: 70, name: 'Soft Sandy Modular Duo', price: 6200, image: '/Images/Sofas/70.jpg', category: 'sofas' },
  { id: 71, name: 'Arctic Mist Sectional', price: 3200, image: '/Images/Sofas/71.jpg', category: 'sofas' },
  { id: 72, name: 'Obsidian Block Sectional', price: 4500, image: '/Images/Sofas/72.jpg', category: 'sofas' },
  { id: 73, name: 'Pure Linen Minimalist Sectional', price: 2900, image: '/Images/Sofas/73.jpg', category: 'sofas' },
  { id: 74, name: 'Arctic White Block Sofa', price: 5800, image: '/Images/Sofas/74.jpg', category: 'sofas' },
  { id: 75, name: 'Ivory Ribbed Ottoman Sofa', price: 4100, image: '/Images/Sofas/75.jpg', category: 'sofas' },
  { id: 76, name: 'Snow Corduroy Rounded Sofa', price: 5200, image: '/Images/Sofas/76.jpg', category: 'sofas' },
  { id: 77, name: 'Biscotti Ribbed Sofa', price: 3600, image: '/Images/Sofas/77.jpg', category: 'sofas' },
  { id: 78, name: 'Sleek Silver Velvet Sectional', price: 3400, image: '/Images/Sofas/78.jpg', category: 'sofas' },
  { id: 79, name: 'Steel Grey Ribbed Sectional', price: 6400, image: '/Images/Sofas/79.jpg', category: 'sofas' },
  { id: 80, name: 'Noir Crushed Velvet Sofa', price: 3100, image: '/Images/Sofas/80.jpg', category: 'sofas' },
  { id: 81, name: 'Geometric Slate Suite (II)', price: 3500, image: '/Images/Sofas/81.jpg', category: 'sofas' },
  { id: 82, name: 'Pebble Ribbed Mega Sofa', price: 5500, image: '/Images/Sofas/82.jpg', category: 'sofas' },
  { id: 83, name: 'Mist Grey Corner Sofa', price: 4200, image: '/Images/Sofas/83.jpg', category: 'sofas' },
  { id: 84, name: 'Espresso Corduroy Sectional', price: 2800, image: '/Images/Sofas/84.jpg', category: 'sofas' },
  { id: 85, name: 'Oatmeal Texture Living Set', price: 3800, image: '/Images/Sofas/85.jpg', category: 'sofas' },
  { id: 86, name: 'Heather Grey Block Sectional', price: 6200, image: '/Images/Sofas/86.jpg', category: 'sofas' },
  { id: 87, name: 'Olive Ash Corduroy Sofa', price: 3200, image: '/Images/Sofas/87.jpg', category: 'sofas' },
  { id: 88, name: 'Toasted Almond Ribbed Sectional', price: 4500, image: '/Images/Sofas/88.jpg', category: 'sofas' },
  { id: 89, name: 'Iron Ribbed Sectional with Ottoman', price: 2900, image: '/Images/Sofas/89.jpg', category: 'sofas' },
  { id: 90, name: 'Granite Texture Living Set', price: 5800, image: '/Images/Sofas/90.jpg', category: 'sofas' },
  { id: 91, name: 'Caramel Corduroy Lounge Bed', price: 4100, image: '/Images/Sofas/91.jpg', category: 'sofas' },
  { id: 92, name: 'Clamshell Cream Ribbed Sofa', price: 5200, image: '/Images/Sofas/92.jpg', category: 'sofas' },
  { id: 93, name: 'Cozy Tan Ribbed Modules', price: 3600, image: '/Images/Sofas/93.jpg', category: 'sofas' },
  { id: 94, name: 'Navy Night Corduroy Sofa', price: 3400, image: '/Images/Sofas/94.jpg', category: 'sofas' },
  { id: 95, name: 'Desert Sand Ribbed Modular', price: 6400, image: '/Images/Sofas/95.jpg', category: 'sofas' },
  { id: 96, name: 'Anthracite Low Block Sofa', price: 3100, image: '/Images/Sofas/96.jpg', category: 'sofas' },
  { id: 97, name: 'Pearl Round-Edge Sectional', price: 3500, image: '/Images/Sofas/97.jpg', category: 'sofas' },
  { id: 98, name: 'Nordic Pebble Sectional', price: 5500, image: '/Images/Sofas/98.jpg', category: 'sofas' },
  { id: 99, name: 'Slate Giant Corduroy Lounge', price: 4200, image: '/Images/Sofas/99.jpg', category: 'sofas' },
  { id: 100, name: 'Corduroy Beige Three-Seater with Matching Armchair', price: 2800, image: '/Images/Sofas/100.jpg', category: 'sofas' },
  { id: 101, name: 'Ribbed Cream Modular Sectional with Integrated Ottoman', price: 3800, image: '/Images/Sofas/101.jpg', category: 'sofas' },
  { id: 102, name: 'Low-Profile Beige Ribbed Modular Duo', price: 6200, image: '/Images/Sofas/102.jpg', category: 'sofas' },
  { id: 103, name: 'Minimalist Ribbed Cream Lounge Sofa', price: 3200, image: '/Images/Sofas/103.jpg', category: 'sofas' },
  { id: 104, name: 'Midnight Charcoal Ribbed L-Shaped Sectional', price: 4500, image: '/Images/Sofas/104.jpg', category: 'sofas' },
  { id: 105, name: 'Beige Corduroy Modular Three-Seater (Front View)', price: 2900, image: '/Images/Sofas/105.jpg', category: 'sofas' },
  { id: 106, name: 'Linear Beige Ribbed Straight Sofa', price: 5800, image: '/Images/Sofas/106.jpg', category: 'sofas' },
  { id: 107, name: 'Teal Green Ribbed L-Shaped Sectional with Chaise', price: 4100, image: '/Images/Sofas/107.jpg', category: 'sofas' },
  { id: 108, name: 'Emerald Green Corduroy Modular Sectional', price: 5200, image: '/Images/Sofas/108.jpg', category: 'sofas' },
  { id: 109, name: 'Onyx Ribbed Modular Sectional with Left Chaise', price: 3600, image: '/Images/Sofas/109.jpg', category: 'sofas' },
  { id: 110, name: 'Forest Green Ribbed Corner Lounge with Large Ottoman', price: 3400, image: '/Images/Sofas/110.jpg', category: 'sofas' },
  { id: 111, name: 'Textured Taupe Low-Profile Wide Sofa', price: 6400, image: '/Images/Sofas/111.jpg', category: 'sofas' },
  { id: 112, name: 'Cream Modular Ribbed Sectional with Extended Chaise', price: 3100, image: '/Images/Sofas/112.jpg', category: 'sofas' },
  { id: 113, name: 'Slate Grey Corduroy Modular Corner Sofa', price: 3500, image: '/Images/Sofas/113.jpg', category: 'sofas' },
  { id: 114, name: 'Ivory Ribbed Sectional with Extended Left Chaise', price: 5500, image: '/Images/Sofas/114.jpg', category: 'sofas' },
  { id: 115, name: 'Dove Grey Multi-Pillow Ribbed Lounge Sofa', price: 4200, image: '/Images/Sofas/115.jpg', category: 'sofas' },
  { id: 116, name: 'Sandy Beige Multi-Pillow Ribbed Lounge Sofa', price: 2800, image: '/Images/Sofas/116.jpg', category: 'sofas' },
  { id: 117, name: 'Slate Grey Smooth Velvet L-Shaped Sectional', price: 3800, image: '/Images/Sofas/117.jpg', category: 'sofas' },
  { id: 118, name: 'Ash Grey Contemporary Sectional with Chaise', price: 6200, image: '/Images/Sofas/118.jpg', category: 'sofas' },
  { id: 119, name: 'Alabaster Modular Minimalist Corner Sofa', price: 3200, image: '/Images/Sofas/119.jpg', category: 'sofas' },
  { id: 120, name: 'Sand Low-Profile Modular L-Shaped Sectional', price: 4500, image: '/Images/Sofas/120.jpg', category: 'sofas' },
  { id: 121, name: 'Cream Oversized Heavily Ribbed Sofa', price: 2900, image: '/Images/Sofas/121.jpg', category: 'sofas' },
  { id: 122, name: 'Beige Corduroy Modular Set View', price: 5800, image: '/Images/Sofas/122.jpg', category: 'sofas' },
]

// All products from Beds page (IDs: 200-251)
const bedsProducts: Product[] = [
  // Top products (image numbers: 37, 38, 39, 40, 42, 44)
  { id: 235, name: 'Arch-Style Upholstered Bed Frame', price: 3200, image: '/Images/Beds/37.jpg', category: 'beds' },
  { id: 236, name: 'Wave-Contour Bouclé Bed Frame', price: 4800, image: '/Images/Beds/38.jpg', category: 'beds' },
  { id: 237, name: 'Ultra-Low Split-Panel White Bed', price: 2900, image: '/Images/Beds/39.jpg', category: 'beds' },
  { id: 238, name: 'Wave-Contour Bouclé Bed Frame', price: 3800, image: '/Images/Beds/40.jpg', category: 'beds' },
  { id: 240, name: 'Wave-Contour Bouclé Bed Frame', price: 6200, image: '/Images/Beds/42.jpg', category: 'beds' },
  { id: 242, name: 'Taupe Split-Panel Bed Frame', price: 5200, image: '/Images/Beds/44.jpg', category: 'beds' },
  // Rest of the products
  { id: 200, name: 'Wave-Contour Bouclé Bed Frame', price: 4200, image: '/Images/Beds/1.jpg', category: 'beds' },
  { id: 201, name: 'Low-Profile Minimalist Bouclé Bed', price: 3500, image: '/Images/Beds/2.jpg', category: 'beds' },
  { id: 202, name: 'Vertical-Stitch Upholstered Bed Frame', price: 2800, image: '/Images/Beds/3.jpg', category: 'beds' },
  { id: 204, name: 'Classic Rectangular Bouclé Bed Frame', price: 3200, image: '/Images/Beds/5.jpg', category: 'beds' },
  { id: 205, name: 'Square-Grid Tufted Bouclé Bed', price: 4800, image: '/Images/Beds/6.jpg', category: 'beds' },
  { id: 206, name: 'Vertical Panel Beige Upholstered Bed', price: 2900, image: '/Images/Beds/7.jpg', category: 'beds' },
  { id: 208, name: 'Modern Bouclé Platform Bed Frame', price: 2600, image: '/Images/Beds/9.jpg', category: 'beds' },
  { id: 209, name: 'Straight-Edge Bouclé Bed Frame', price: 6200, image: '/Images/Beds/10.jpg', category: 'beds' },
  { id: 210, name: 'Wave-Contour Bouclé Bed Frame', price: 4100, image: '/Images/Beds/11.jpg', category: 'beds' },
  { id: 211, name: 'Vertical Panel Bed with Gold Accents', price: 5200, image: '/Images/Beds/12.jpg', category: 'beds' },
  { id: 212, name: 'Horizontal Channel-Tufted Bouclé Bed', price: 3600, image: '/Images/Beds/13.jpg', category: 'beds' },
  { id: 215, name: 'Segmented Tier-Headboard Bed Frame', price: 3100, image: '/Images/Beds/16.jpg', category: 'beds' },
  { id: 216, name: 'Slate Grey Minimalist Fabric Bed', price: 4200, image: '/Images/Beds/17.jpg', category: 'beds' },
  { id: 217, name: 'Cloud-Style Segmented Bouclé Bed', price: 2800, image: '/Images/Beds/19.jpg', category: 'beds' },
  { id: 218, name: 'Silver Velvet Slim Wingback Bed', price: 5500, image: '/Images/Beds/20.jpg', category: 'beds' },
  { id: 220, name: 'Padded Wide-Rail Platform Bed', price: 4800, image: '/Images/Beds/22.jpg', category: 'beds' },
  { id: 221, name: 'Twin-Pillow Headboard Bed Frame', price: 2900, image: '/Images/Beds/23.jpg', category: 'beds' },
  { id: 222, name: 'Wave-Contour Bouclé Bed Frame', price: 3800, image: '/Images/Beds/24.jpg', category: 'beds' },
  { id: 224, name: 'Soft-Corner Bouclé Low-Profile Bed', price: 6200, image: '/Images/Beds/26.jpg', category: 'beds' },
  { id: 225, name: 'Taupe Split-Panel Bed Frame', price: 4100, image: '/Images/Beds/27.jpg', category: 'beds' },
  { id: 226, name: 'Charcoal Corduroy Split-Panel Bed', price: 5200, image: '/Images/Beds/28.jpg', category: 'beds' },
  { id: 227, name: 'Vertical Panel Beige Upholstered Bed', price: 3600, image: '/Images/Beds/29.jpg', category: 'beds' },
  { id: 228, name: 'Midnight Velvet Paneled Bed Frame', price: 3400, image: '/Images/Beds/30.jpg', category: 'beds' },
  { id: 229, name: 'Arch-Style Upholstered Bed Frame', price: 6400, image: '/Images/Beds/31.jpg', category: 'beds' },
  { id: 230, name: 'Beige Split-Panel Bed Frame', price: 3100, image: '/Images/Beds/32.jpg', category: 'beds' },
  { id: 231, name: 'Beige Split-Panel Bed Frame', price: 4200, image: '/Images/Beds/33.jpg', category: 'beds' },
  { id: 232, name: 'Black Grid-Tufted Upholstered Bed', price: 3500, image: '/Images/Beds/34.jpg', category: 'beds' },
  { id: 234, name: 'Grey Velvet Paneled Bed Frame', price: 5500, image: '/Images/Beds/36.jpg', category: 'beds' },
  { id: 244, name: 'Upholstered Slatted Bed Base', price: 3400, image: '/Images/Beds/46.jpg', category: 'beds' },
]

// All products from Tables page (IDs: 300-307)
const tablesProducts: Product[] = [
  { id: 300, name: 'Natural Oak Oval Table with Pill Legs', price: 2800, image: '/Images/Tables/1.jpg', category: 'tables' },
  { id: 301, name: 'Oak Ribbed Pedestal Oval Table', price: 1200, image: '/Images/Tables/2.jpg', category: 'tables' },
  { id: 302, name: 'White Marble Ribbed Column Table', price: 2200, image: '/Images/Tables/3.jpg', category: 'tables' },
  { id: 303, name: 'Modern Black X-Frame Rectangular Table', price: 4500, image: '/Images/Tables/4.jpg', category: 'tables' },
  { id: 304, name: 'Ivory Minimalist Fluted Pedestal Table', price: 2400, image: '/Images/Tables/6.jpg', category: 'tables' },
  { id: 305, name: 'Grey Marble Fluted Black Base Table', price: 1600, image: '/Images/Tables/7.jpg', category: 'tables' },
  { id: 306, name: 'Sleek White Teardrop Pedestal Table', price: 3200, image: '/Images/Tables/8.jpg', category: 'tables' },
]

// All products from Tables & Sideboards page (IDs: 400-411)
const tablesBuffetProducts: Product[] = [
  { id: 400, name: 'Midnight Marble Fluted Buffet & Nesting Tables', price: 2500, image: '/Images/Tables & buffet/1.jpg', category: 'tables-buffet' },
  { id: 401, name: 'Arctic White & Wood Fluted Living Set', price: 2800, image: '/Images/Tables & buffet/2.jpg', category: 'tables-buffet' },
  { id: 402, name: 'Modern Fluted Marble Set', price: 3200, image: '/Images/Tables & buffet/3.jpg', category: 'tables-buffet' },
  { id: 403, name: 'Carrara Marble Hairpin Console & Tables', price: 2900, image: '/Images/Tables & buffet/4.jpg', category: 'tables-buffet' },
  { id: 404, name: 'Tundra Wood & White Hairpin Collection', price: 3500, image: '/Images/Tables & buffet/5.jpg', category: 'tables-buffet' },
  { id: 405, name: 'Obsidian Stone Hairpin Media Set', price: 2700, image: '/Images/Tables & buffet/6.jpg', category: 'tables-buffet' },
  { id: 406, name: 'Premier Midnight Fluted & Marble Suite', price: 3100, image: '/Images/Tables & buffet/7.jpg', category: 'tables-buffet' },
  { id: 407, name: 'Horizon White & Wood Pill-Shaped Set', price: 3300, image: '/Images/Tables & buffet/8.jpg', category: 'tables-buffet' },
  { id: 408, name: 'Cloud Marble Fluted Console & Coffee Table', price: 2600, image: '/Images/Tables & buffet/9.jpg', category: 'tables-buffet' },
  { id: 409, name: 'Shadow Noir Fluted TV Console & Oval Coffee Table', price: 3000, image: '/Images/Tables & buffet/10.jpg', category: 'tables-buffet' },
  { id: 410, name: 'Nordic Oak Fluted Console & Side Tables', price: 3400, image: '/Images/Tables & buffet/11.jpg', category: 'tables-buffet' },
  { id: 411, name: 'Natural Ash Fluted Media Unit & Nesting Rounds', price: 3600, image: '/Images/Tables & buffet/12.jpg', category: 'tables-buffet' },
]

// Combine all products
const allProducts: Product[] = [
  ...sofasProducts,
  ...bedsProducts,
  ...tablesProducts,
  ...tablesBuffetProducts,
]

// Function to get product by ID
export const getProductById = (id: number): Product | undefined => {
  return allProducts.find(product => product.id === id)
}

// Function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category)
}

// Function to get all products
export const getAllProducts = (): Product[] => {
  return allProducts
}

