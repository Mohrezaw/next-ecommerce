import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "iphone-16",
    name: "iPhone 16",
    description:
      "The iPhone 16 features a stunning display, powerful performance, and an advanced camera system. Choose from a variety of colors and storage options to find the perfect iPhone for you.",
    variants: [
      {
        color: "Black",
        storage: "128",
        price: 799,
        images: [
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OUFsUUpuUVQ3cUdJUXc0NW5mTVpFdE9MekhWSGZtV1pvV240QzNuTk80VXhseHVZcEw1SmhqcElaQkJMTm9FMzlKVGsyNDdnTWJxWHVYZ20wTDc3dFA&traceId=1",
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OWs4MU5ETTMxZlpydmdIeS80ekdVNjhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXV1ZzJSTDNYc1JQaGErbzBOMjVHQXBVd0cxVytZV0ZVQnV6YjdNc0g2T2t3&traceId=1",
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4L3BmOVJmTVM0WXhacUM3aDAyUURQLzhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXNkalFzSml3eEhwWS9kODBoQktTdVBmM0k2TTVTMWRDZzFNdHo1aERTZTV3&traceId=1",
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OURFQVlLZ0k0TitJZG9QQXV3SzlRbDhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXVzZW90UnB5bUg3Q1J1Z2xhYnAwcE1EVmRUcUZJOVJsMG1DTUpQRjdUM1NB&traceId=1",
        ],
      },
      {
        color: "Black",
        storage: "256",
        price: 899,
        images: [
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OUFsUUpuUVQ3cUdJUXc0NW5mTVpFdE9MekhWSGZtV1pvV240QzNuTk80VXhseHVZcEw1SmhqcElaQkJMTm9FMzlKVGsyNDdnTWJxWHVYZ20wTDc3dFA&traceId=1",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OWs4MU5ETTMxZlpydmdIeS80ekdVNjhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXV1ZzJSTDNYc1JQaGErbzBOMjVHQXBVd0cxVytZV0ZVQnV6YjdNc0g2T2t3&traceId=1",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4L3BmOVJmTVM0WXhacUM3aDAyUURQLzhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXNkalFzSml3eEhwWS9kODBoQktTdVBmM0k2TTVTMWRDZzFNdHo1aERTZTV3&traceId=1",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OURFQVlLZ0k0TitJZG9QQXV3SzlRbDhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXVzZW90UnB5bUg3Q1J1Z2xhYnAwcE1EVmRUcUZJOVJsMG1DTUpQRjdUM1NB&traceId=1",
        ],
      },
      {
        color: "Teal",
        storage: "128",
        price: 799,
        images: [
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4L29KblRMQzVUOE4vMXpkMWtFcm9GcXF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGRaWWVaY3B6VTFTdVNEWDF2OTRBYlY&traceId=1",
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4K05tOGV2bzRuYjBHQm9BRXF6V0NIa1pGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVVjb0pRV1BLWkpwS3lTdmpyVm9XVnRXVi9BOUVIMG00R2gwMHk0cXVORTFB&traceId=1",
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4ODlFQXprM0hDbGN6dXdCdHZYOEllaVpGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVY3WkQ4K3d6enlib0RFNk51VnJ3NGkwZWlkTmYwaG1taWdvU3JZRHlDL0tB&traceId=1",
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OFBjdm1iTDVHUUIydzA3NnRqc3JwS1pGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVdsQUl3bUplV0NnaUJoa0N0NXhoVm9NUjhodU9MTHNlVnVUMUtlUmw4RU9R&traceId=1"
        ],
      },
      {
        color: "Teal",
        storage: "256",
        price: 899,
        images: [
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4L29KblRMQzVUOE4vMXpkMWtFcm9GcXF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGRaWWVaY3B6VTFTdVNEWDF2OTRBYlY&traceId=1",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4K05tOGV2bzRuYjBHQm9BRXF6V0NIa1pGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVVjb0pRV1BLWkpwS3lTdmpyVm9XVnRXVi9BOUVIMG00R2gwMHk0cXVORTFB&traceId=1",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4ODlFQXprM0hDbGN6dXdCdHZYOEllaVpGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVY3WkQ4K3d6enlib0RFNk51VnJ3NGkwZWlkTmYwaG1taWdvU3JZRHlDL0tB&traceId=1",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OFBjdm1iTDVHUUIydzA3NnRqc3JwS1pGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVdsQUl3bUplV0NnaUJoa0N0NXhoVm9NUjhodU9MTHNlVnVUMUtlUmw4RU9R&traceId=1"
        ],
      },
    ],
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    description:
      "The iPhone 16 Pro is the most advanced iPhone ever. Featuring a pro-grade camera system, the powerful A18 Pro chip, and a stunning Super Retina XDR display with ProMotion technology.",
    variants: [
      {
        color: "Black Titanium",
        storage: "256",
        price: 999,
        images: [
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NzFzS1BRRzA4NTJUci9vckVTY21rM2lCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1RkcERRMUVIWTBwNlRNS3dVelNTTTVB&traceId=1",
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NlcvVjg4Q2h4WWRjcFAyYlBrM0N1bENUcEx1KzZ4TU5aSmJ4VzBKZWFPSGppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9Xejlzcm5MeVVheDQwZ0ZkTEM4WHJR&traceId=1",
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NlcvVjg4Q2h4WWRjcFAyYlBrM0N1bFpEeWhrZkdKWXBoNVhqVm8yYk9VTXppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9kUERhVU44YnljaExQcHIrZDJEZG5R&traceId=1",
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NlcvVjg4Q2h4WWRjcFAyYlBrM0N1bFpBUWF3RDkwNHZqdTNEb0VrUHNLd1RpOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9EUFgvN0k5ZDlHMk84L01vQmM1Nm93&traceId=1"
        ],
      },
      {
        color: "Black Titanium",
        storage: "512",
        price: 1199,
        images: [
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NzFzS1BRRzA4NTJUci9vckVTY21rM2lCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1RkcERRMUVIWTBwNlRNS3dVelNTTTVB&traceId=1",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NlcvVjg4Q2h4WWRjcFAyYlBrM0N1bENUcEx1KzZ4TU5aSmJ4VzBKZWFPSGppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9Xejlzcm5MeVVheDQwZ0ZkTEM4WHJR&traceId=1",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NlcvVjg4Q2h4WWRjcFAyYlBrM0N1bFpEeWhrZkdKWXBoNVhqVm8yYk9VTXppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9kUERhVU44YnljaExQcHIrZDJEZG5R&traceId=1",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NlcvVjg4Q2h4WWRjcFAyYlBrM0N1bFpBUWF3RDkwNHZqdTNEb0VrUHNLd1RpOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9EUFgvN0k5ZDlHMk84L01vQmM1Nm93&traceId=1"
        ],
      },
      {
        color: "Desert Titanium",
        storage: "256",
        price: 999,
        images: [
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94Nm1neGR3bXRIczEyZHc4WTk0RkR4VEY3eHJKR1hDaEJCS2hmc2czazlldHlSTUMybCtXNXZpclhWeFpYZUcvRk80dEcwRGlZdHZNUlUyQVJ1QXFtSFFsOE8xQ2Rxc3QzeElocmgrcU1DbFJn&traceId=1",
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNCtvdWdQMWpIV2NFaHUyTjZvK3ozWmRJVUY1eklwSElSL2pyWFgySnpoc1RLa0ZJQjcvY2pnYVpRdGdHbzJQemdCZk81SjNVTG9zc1RWN0ZXVGFzaFVuNXFNVzc5YkZmK2I4YzJ4ZndkZUdj&traceId=1",
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEN0Mk9PSnZhL2dGRjMvR25CcGJsdDlJVUY1eklwSElSL2pyWFgySnpoc1RLa0ZJQjcvY2pnYVpRdGdHbzJQemdQZ0YzUGN0SVhHczl1WS9uUjcxdmxuNXFNVzc5YkZmK2I4YzJ4ZndkZUdj&traceId=1",
          "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNDVST0FtSnQrc0g3M1p4WG5lNzRDb05JVUY1eklwSElSL2pyWFgySnpoc1RLa0ZJQjcvY2pnYVpRdGdHbzJQemdwby95YWVuVDdVVzVEM1gvSzBtN0UzNXFNVzc5YkZmK2I4YzJ4ZndkZUdj&traceId=1"
        ],
      },
      {
        color: "Desert Titanium",
        storage: "512",
        price: 1199,
        images: [
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94Nm1neGR3bXRIczEyZHc4WTk0RkR4VEY3eHJKR1hDaEJCS2hmc2czazlldHlSTUMybCtXNXZpclhWeFpYZUcvRk80dEcwRGlZdHZNUlUyQVJ1QXFtSFFsOE8xQ2Rxc3QzeElocmgrcU1DbFJn&traceId=1",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNCtvdWdQMWpIV2NFaHUyTjZvK3ozWmRJVUY1eklwSElSL2pyWFgySnpoc1RLa0ZJQjcvY2pnYVpRdGdHbzJQemdCZk81SjNVTG9zc1RWN0ZXVGFzaFVuNXFNVzc5YkZmK2I4YzJ4ZndkZUdj&traceId=1",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEN0Mk9PSnZhL2dGRjMvR25CcGJsdDlJVUY1eklwSElSL2pyWFgySnpoc1RLa0ZJQjcvY2pnYVpRdGdHbzJQemdQZ0YzUGN0SVhHczl1WS9uUjcxdmxuNXFNVzc5YkZmK2I4YzJ4ZndkZUdj&traceId=1",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNDVST0FtSnQrc0g3M1p4WG5lNzRDb05JVUY1eklwSElSL2pyWFgySnpoc1RLa0ZJQjcvY2pnYVpRdGdHbzJQemdwby95YWVuVDdVVzVEM1gvSzBtN0UzNXFNVzc5YkZmK2I4YzJ4ZndkZUdj&traceId=1"
        ],
      },
    ],
  },
];
