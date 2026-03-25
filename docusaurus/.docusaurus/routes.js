import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/specs/',
    component: ComponentCreator('/specs/', '648'),
    exact: true
  },
  {
    path: '/specs/',
    component: ComponentCreator('/specs/', 'a6c'),
    routes: [
      {
        path: '/specs/',
        component: ComponentCreator('/specs/', '075'),
        routes: [
          {
            path: '/specs/',
            component: ComponentCreator('/specs/', '659'),
            routes: [
              {
                path: '/specs/canonical-payment/SPEC',
                component: ComponentCreator('/specs/canonical-payment/SPEC', '100'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack',
                component: ComponentCreator('/specs/cashpack', '670'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/business-model/',
                component: ComponentCreator('/specs/cashpack/business-model/', '2a0'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/core-concepts/',
                component: ComponentCreator('/specs/cashpack/core-concepts/', '177'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/governance/',
                component: ComponentCreator('/specs/cashpack/governance/', 'a75'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/guides/',
                component: ComponentCreator('/specs/cashpack/guides/', '26b'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/overview/',
                component: ComponentCreator('/specs/cashpack/overview/', '298'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/reference/',
                component: ComponentCreator('/specs/cashpack/reference/', 'a01'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/SPEC',
                component: ComponentCreator('/specs/cashpack/SPEC', '14a'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/specifications/cpp-001',
                component: ComponentCreator('/specs/cashpack/specifications/cpp-001', '5a9'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/disposable-keys/SPEC',
                component: ComponentCreator('/specs/disposable-keys/SPEC', 'f21'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack',
                component: ComponentCreator('/specs/stablecoin-stack', '7de'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001', 'cbf'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/business-model/',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/business-model/', 'e1a'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/core-concepts',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/core-concepts', 'ca4'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/core-concepts/dual-signature-pattern',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/core-concepts/dual-signature-pattern', 'dba'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/core-concepts/fee-model',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/core-concepts/fee-model', '232'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/core-concepts/payment-flow',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/core-concepts/payment-flow', '412'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/core-concepts/permit-based-payments',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/core-concepts/permit-based-payments', '8a0'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/core-concepts/system-architecture',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/core-concepts/system-architecture', '154'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/core-concepts/why-cryptographic-payments',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/core-concepts/why-cryptographic-payments', 'cbc'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/governance',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/governance', '611'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/governance/changelog',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/governance/changelog', '000'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/governance/versioning-policy',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/governance/versioning-policy', '1d4'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/guides',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/guides', '011'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/guides/buy-acquiring-pack',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/guides/buy-acquiring-pack', 'bc8'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/guides/integrate-settlement-contract',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/guides/integrate-settlement-contract', '443'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/guides/payment-flow-walkthrough',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/guides/payment-flow-walkthrough', 'd19'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/guides/submit-a-payment',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/guides/submit-a-payment', '529'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/overview',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/overview', 'bc1'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/overview/introduction',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/overview/introduction', '1ed'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/overview/payment-submission',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/overview/payment-submission', 'a30'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/overview/settlement-contract',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/overview/settlement-contract', '220'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/reference',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/reference', 'a3f'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/reference/component-index',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/reference/component-index', '34c'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/reference/contract-interface',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/reference/contract-interface', '909'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/reference/glossary',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/reference/glossary', '4db'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/reference/normative-references',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/reference/normative-references', 'b09'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/reference/payload-fields',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/reference/payload-fields', '96b'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/SPEC',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/SPEC', '9e6'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002', '19c'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/core-concepts',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/core-concepts', 'b9e'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/core-concepts/connection-model',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/core-concepts/connection-model', '77e'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/core-concepts/message-authentication',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/core-concepts/message-authentication', '7d1'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/core-concepts/subscription-model',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/core-concepts/subscription-model', 'd40'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/governance',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/governance', '978'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/governance/changelog',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/governance/changelog', 'c67'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/guides',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/guides', '561'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/guides/connect-and-authenticate',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/guides/connect-and-authenticate', '200'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/guides/submit-a-payment',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/guides/submit-a-payment', '634'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/guides/subscribe-to-updates',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/guides/subscribe-to-updates', 'f3e'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/overview',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/overview', '1e3'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/overview/gateway-role',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/overview/gateway-role', '059'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/overview/introduction',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/overview/introduction', 'a1a'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/reference/error-codes',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/reference/error-codes', '895'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/reference/glossary',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/reference/glossary', '458'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/reference/message-type-index',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/reference/message-type-index', '479'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/SPEC',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/SPEC', 'a15'),
                exact: true,
                sidebar: "fpsfSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
