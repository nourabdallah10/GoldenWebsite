import HeroSection from '../components/HeroSection'
import CategoryIcons from '../components/CategoryIcons'
import CategoriesGrid from '../components/CategoriesGrid'
import DesignerCollective from '../components/DesignerCollective'
import GoldenFurnitureServices from '../components/GoldenFurnitureServices'
import BestSellerSofas from '../components/BestSellerSofas'
import SectionDivider from '../components/SectionDivider'
import BestSellerBeds from '../components/BestSellerBeds'
import AboutUsFeatures from '../components/AboutUsFeatures'
import SEO from '../components/SEO'

function Home() {
  return (
    <>
      <SEO
        title="Golden Furniture"
        description="Discover premium furniture collections including sofas, beds, and tables. Exclusive designs from our Designer Collective. Shop now!"
        keywords="furniture, sofas, beds, tables, Tel Aviv, Israel, premium furniture"
      />
    <div className="min-h-screen">
      <HeroSection />
      <CategoryIcons />
      <CategoriesGrid />
      <DesignerCollective />
      <GoldenFurnitureServices />
      <BestSellerSofas />
      <SectionDivider />
      <BestSellerBeds />
      <AboutUsFeatures />
    </div>
    </>
  )
}

export default Home

