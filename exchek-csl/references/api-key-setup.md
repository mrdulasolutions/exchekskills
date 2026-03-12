# Trade.gov API key setup (CSL skill)

The Consolidated Screening List (CSL) API requires a **free** API key (subscription key) from the International Trade Administration (ITA) Data Services Platform. The skill never stores the key; the user provides it per session or via environment variable.

## How to get a free API key

1. **Go to** [developer.trade.gov](https://developer.trade.gov).
2. **Sign in** (or **Sign up** if you don’t have an account). Use the Sign In link at the top right; create an account from the sign-in form if needed.
3. **Subscribe to the API:**
   - Open [Products](https://developer.trade.gov/products).
   - Click **Data Services Platform APIs** (or the product that includes the Consolidated Screening List API).
   - Enter a subscription name and click **Subscribe**. You only need to do this once.
4. **Copy your key:**
   - Go to your [Profile](https://developer.trade.gov/profile).
   - Copy the **Primary key** or **Secondary key**. This is your subscription key for API requests.

## How the agent should use the key

- **Do not store the API key in the skill or in any file in the skill directory.**
- **Ask the user for the key** when they first run a CSL search in a session, or **read from environment** if the user has set one (e.g. `TRADE_GOV_API_KEY`).
- Use the key only in the request to the CSL API (as a query parameter or header, per the API documentation at [developer.trade.gov](https://developer.trade.gov/api-details#api=consolidated-screening-list&operation=search)).

If the user doesn’t have a key, direct them to [developer.trade.gov](https://developer.trade.gov) and the steps above.
