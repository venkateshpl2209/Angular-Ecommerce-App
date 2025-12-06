import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../Models/products';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  imports: [
    ProductCard,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatListItemTitle,
    RouterLink,
    TitleCasePipe,
  ],
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened="true">
        <div class="p-6">
          <h2 class="text-lg text-grey-900">Categories</h2>

          <mat-nav-list>
            @for (cate of categories(); track cate) {
            <mat-list-item
              [activated]="cate === category()"
              class="my-2"
              [routerLink]="'/products/' + cate"
            >
              <span matListItemTitle class="font-medium">
                {{ cate | titlecase }}
              </span>
            </mat-list-item>
            }
          </mat-nav-list>
        </div>
      </mat-sidenav>
      <mat-sidenav-content class="bg-grey-100 p-6 h-full">
        <div class="bg-grey-100 p-6 h-full">
          <h1 class="text-2xl font-bold text-grey-900">
            {{ category().charAt(0).toUpperCase() + category().slice(1) }}
          </h1>

          <div class="responsive-grid mt-6">
            @for (product of filteredProducts(); track product.id) {
            <app-product-card [product]="product" />
            }
          </div>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: ``,
})
export default class ProductsGrid {
  category = input<string>('all');

  products = signal<Product[]>([
    // Electronics
    {
      id: '1',
      name: 'Smartphone Pro X',
      description: 'Flagship smartphone with OLED display and fast processor.',
      price: 54999,
      imageUrl:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      reviewCount: 220,
      category: 'Electronics',
      inStock: 45,
    },
    {
      id: '2',
      name: 'Ultra HD Smart TV 55"',
      description: '4K HDR Smart TV with built-in streaming apps and voice control.',
      price: 45999,
      imageUrl:
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      reviewCount: 189,
      category: 'Electronics',
      inStock: 28,
    },
    {
      id: '3',
      name: 'Gaming Laptop Elite',
      description: 'High-performance gaming laptop with RTX graphics and 16GB RAM.',
      price: 89999,
      imageUrl:
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      reviewCount: 312,
      category: 'Electronics',
      inStock: 0,
    },
    {
      id: '4',
      name: 'Tablet Pro 12.9"',
      description: 'Professional tablet with stylus support and all-day battery.',
      price: 67999,
      imageUrl:
        'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      reviewCount: 156,
      category: 'Electronics',
      inStock: 52,
    },
    {
      id: '5',
      name: 'Smart Watch Series 8',
      description: 'Fitness tracking smartwatch with heart rate monitor and GPS.',
      price: 24999,
      imageUrl:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
      rating: 4.4,
      reviewCount: 445,
      category: 'Electronics',
      inStock: null,
    },
    {
      id: '6',
      name: 'Digital Camera DSLR',
      description: '24MP DSLR camera with interchangeable lenses and 4K video.',
      price: 72999,
      imageUrl:
        'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      reviewCount: 203,
      category: 'Electronics',
      inStock: 22,
    },

    // Audio
    {
      id: '7',
      name: 'Wireless Noise-Cancelling Headphones',
      description: 'Premium over-ear headphones with active noise cancellation.',
      price: 18999,
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      reviewCount: 567,
      category: 'Audio',
      inStock: 95,
    },
    {
      id: '8',
      name: 'True Wireless Earbuds Pro',
      description: 'Compact earbuds with crystal-clear sound and 24hr battery life.',
      price: 12999,
      imageUrl:
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      reviewCount: 789,
      category: 'Audio',
      inStock: 134,
    },
    {
      id: '9',
      name: 'Bluetooth Speaker Waterproof',
      description: 'Portable speaker with 360° sound and IPX7 water resistance.',
      price: 7999,
      imageUrl:
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      reviewCount: 423,
      category: 'Audio',
      inStock: 167,
    },
    {
      id: '10',
      name: 'Studio Monitor Speakers',
      description: 'Professional studio monitors for music production and mixing.',
      price: 34999,
      imageUrl:
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
      rating: 4.9,
      reviewCount: 145,
      category: 'Audio',
      inStock: 31,
    },
    {
      id: '11',
      name: 'Soundbar with Subwoofer',
      description: 'Premium soundbar system with wireless subwoofer for home theater.',
      price: 29999,
      imageUrl:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      reviewCount: 267,
      category: 'Audio',
      inStock: 43,
    },

    // Fashion
    {
      id: '12',
      name: 'Classic Leather Jacket',
      description: 'Genuine leather jacket with vintage styling and inner lining.',
      price: 8999,
      imageUrl:
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      reviewCount: 178,
      category: 'Fashion',
      inStock: 64,
    },
    {
      id: '13',
      name: 'Designer Sneakers',
      description: 'Premium sneakers with cushioned sole and breathable mesh.',
      price: 6499,
      imageUrl:
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      reviewCount: 892,
      category: 'Fashion',
      inStock: 142,
    },
    {
      id: '14',
      name: 'Denim Jeans Slim Fit',
      description: 'Comfortable stretch denim with modern slim fit cut.',
      price: 3499,
      imageUrl:
        'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80',
      rating: 4.4,
      reviewCount: 534,
      category: 'Fashion',
      inStock: 198,
    },
    {
      id: '15',
      name: 'Casual Cotton T-Shirt',
      description: 'Premium cotton t-shirt with comfortable fit and vibrant colors.',
      price: 1299,
      imageUrl:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      reviewCount: 1023,
      category: 'Fashion',
      inStock: 287,
    },
    {
      id: '16',
      name: 'Formal Blazer',
      description: 'Tailored blazer for professional and formal occasions.',
      price: 7999,
      imageUrl:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      reviewCount: 234,
      category: 'Fashion',
      inStock: 76,
    },
    {
      id: '17',
      name: 'Summer Dress Floral',
      description: 'Light and breezy floral dress perfect for summer days.',
      price: 2999,
      imageUrl:
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      reviewCount: 445,
      category: 'Fashion',
      inStock: 123,
    },
    {
      id: '18',
      name: 'Leather Handbag',
      description: 'Elegant leather handbag with multiple compartments.',
      price: 5499,
      imageUrl:
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      reviewCount: 312,
      category: 'Fashion',
      inStock: 89,
    },

    // Appliances
    {
      id: '19',
      name: 'French Door Refrigerator',
      description: 'Energy-efficient refrigerator with smart temperature control.',
      price: 64999,
      imageUrl:
        'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      reviewCount: 187,
      category: 'Appliances',
      inStock: 18,
    },
    {
      id: '20',
      name: 'Front Load Washing Machine',
      description: 'High-efficiency washer with steam cleaning and smart features.',
      price: 42999,
      imageUrl:
        'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      reviewCount: 256,
      category: 'Appliances',
      inStock: 24,
    },
    {
      id: '21',
      name: 'Microwave Oven Convection',
      description: 'Multi-function microwave with convection and grill modes.',
      price: 15999,
      imageUrl:
        'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      reviewCount: 423,
      category: 'Appliances',
      inStock: 67,
    },
    {
      id: '22',
      name: 'Air Purifier HEPA',
      description: 'Advanced air purifier with HEPA filter and smart sensors.',
      price: 19999,
      imageUrl:
        'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      reviewCount: 534,
      category: 'Appliances',
      inStock: 92,
    },
    {
      id: '23',
      name: 'Robot Vacuum Cleaner',
      description: 'Smart robot vacuum with mapping and auto-charging.',
      price: 32999,
      imageUrl:
        'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      reviewCount: 678,
      category: 'Appliances',
      inStock: 54,
    },
    {
      id: '24',
      name: 'Coffee Maker Espresso',
      description: 'Professional espresso machine with milk frother.',
      price: 24999,
      imageUrl:
        'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      reviewCount: 389,
      category: 'Appliances',
      inStock: 73,
    },
    {
      id: '25',
      name: 'Air Fryer Digital',
      description: 'Large capacity air fryer with digital controls and presets.',
      price: 9999,
      imageUrl:
        'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      reviewCount: 891,
      category: 'Appliances',
      inStock: 145,
    },
    {
      id: '26',
      name: 'Blender High-Speed',
      description: 'Professional blender with multiple speed settings and jug.',
      price: 7999,
      imageUrl:
        'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      reviewCount: 567,
      category: 'Appliances',
      inStock: 112,
    },

    // Additional Electronics
    {
      id: '27',
      name: 'Wireless Gaming Mouse',
      description: 'Ergonomic gaming mouse with customizable RGB and high DPI.',
      price: 4999,
      imageUrl:
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      reviewCount: 723,
      category: 'Electronics',
      inStock: 156,
    },
    {
      id: '28',
      name: 'Mechanical Gaming Keyboard',
      description: 'RGB mechanical keyboard with tactile switches and macro keys.',
      price: 8999,
      imageUrl:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      reviewCount: 612,
      category: 'Electronics',
      inStock: 94,
    },

    // Additional Fashion
    {
      id: '29',
      name: 'Polarized Sunglasses',
      description: 'UV protection sunglasses with polarized lenses and metal frame.',
      price: 3999,
      imageUrl:
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      reviewCount: 456,
      category: 'Fashion',
      inStock: 178,
    },
    {
      id: '30',
      name: 'Smartwatch Fitness Band',
      description: 'Fitness tracker with heart rate monitor and sleep tracking.',
      price: 4999,
      imageUrl:
        'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80',
      rating: 4.4,
      reviewCount: 834,
      category: 'Electronics',
      inStock: 203,
    },
  ]);

  filteredProducts = computed(() => {
    if (this.category() === 'all') return this.products();

    return this.products().filter(
      (p) => p.category.toLowerCase() === this.category().toLowerCase()
    );
  });

  categories = signal<string[]>([
    'all',
    ...Array.from(new Set(this.products().map((p) => p.category))),
  ]);
}
