FINANCIAL_REPORT = {
    2020: {
        'revenue': 1200000,
        'expenses': 500000,
    },
    2021: {
        'revenue': 1800000,
        'expenses': 1500000,
    }
}


def get_revenue_growth_ratio():
    latest_revenue = FINANCIAL_REPORT[2021]['revenue']
    previous_revenue = FINANCIAL_REPORT[2020]['revenue']
    revenue_growth_ratio = (latest_revenue - previous_revenue) / previous_revenue * 100
    print(revenue_growth_ratio)


if __name__ == "__main__":
    get_revenue_growth_ratio()