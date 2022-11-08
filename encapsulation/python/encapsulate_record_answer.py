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


class FinancialReport:
    def __init__(self, data):
        self._data = data

    def get_revenue_by_year(self, year):
        return self._data[year]["revenue"]


def _get_financial_report():
    return FinancialReport(FINANCIAL_REPORT)


def get_revenue_growth_ratio():
    latest_revenue = _get_financial_report().get_revenue_by_year(2021)
    previous_revenue = _get_financial_report().get_revenue_by_year(2020)
    revenue_growth_ratio = (latest_revenue - previous_revenue) / previous_revenue * 100
    print(revenue_growth_ratio)


if __name__ == "__main__":
    get_revenue_growth_ratio()