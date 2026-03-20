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
    component: ComponentCreator('/specs/', '254'),
    routes: [
      {
        path: '/specs/',
        component: ComponentCreator('/specs/', 'e7c'),
        routes: [
          {
            path: '/specs/',
            component: ComponentCreator('/specs/', 'f23'),
            routes: [
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
                path: '/specs/ssf',
                component: ComponentCreator('/specs/ssf', 'f79'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001',
                component: ComponentCreator('/specs/ssf/ssf-001', '989'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/business-model/',
                component: ComponentCreator('/specs/ssf/ssf-001/business-model/', 'a94'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/core-concepts',
                component: ComponentCreator('/specs/ssf/ssf-001/core-concepts', '072'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/core-concepts/dual-signature-pattern',
                component: ComponentCreator('/specs/ssf/ssf-001/core-concepts/dual-signature-pattern', '300'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/core-concepts/fee-model',
                component: ComponentCreator('/specs/ssf/ssf-001/core-concepts/fee-model', '41f'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/core-concepts/payment-flow',
                component: ComponentCreator('/specs/ssf/ssf-001/core-concepts/payment-flow', '3bd'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/core-concepts/permit-based-payments',
                component: ComponentCreator('/specs/ssf/ssf-001/core-concepts/permit-based-payments', 'dba'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/core-concepts/system-architecture',
                component: ComponentCreator('/specs/ssf/ssf-001/core-concepts/system-architecture', '3c0'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/core-concepts/why-cryptographic-payments',
                component: ComponentCreator('/specs/ssf/ssf-001/core-concepts/why-cryptographic-payments', 'ec4'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/governance',
                component: ComponentCreator('/specs/ssf/ssf-001/governance', '93f'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/governance/changelog',
                component: ComponentCreator('/specs/ssf/ssf-001/governance/changelog', 'ecf'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/governance/versioning-policy',
                component: ComponentCreator('/specs/ssf/ssf-001/governance/versioning-policy', 'f1f'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/guides',
                component: ComponentCreator('/specs/ssf/ssf-001/guides', 'd18'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/guides/buy-acquiring-pack',
                component: ComponentCreator('/specs/ssf/ssf-001/guides/buy-acquiring-pack', 'f8b'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/guides/integrate-settlement-contract',
                component: ComponentCreator('/specs/ssf/ssf-001/guides/integrate-settlement-contract', '602'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/guides/payment-flow-walkthrough',
                component: ComponentCreator('/specs/ssf/ssf-001/guides/payment-flow-walkthrough', 'd72'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/guides/submit-a-payment',
                component: ComponentCreator('/specs/ssf/ssf-001/guides/submit-a-payment', 'f51'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/overview',
                component: ComponentCreator('/specs/ssf/ssf-001/overview', 'aec'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/overview/introduction',
                component: ComponentCreator('/specs/ssf/ssf-001/overview/introduction', 'c85'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/overview/payment-submission',
                component: ComponentCreator('/specs/ssf/ssf-001/overview/payment-submission', 'e01'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/overview/settlement-contract',
                component: ComponentCreator('/specs/ssf/ssf-001/overview/settlement-contract', 'f2f'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/reference',
                component: ComponentCreator('/specs/ssf/ssf-001/reference', '640'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/reference/component-index',
                component: ComponentCreator('/specs/ssf/ssf-001/reference/component-index', '00a'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/reference/contract-interface',
                component: ComponentCreator('/specs/ssf/ssf-001/reference/contract-interface', '7b9'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/reference/glossary',
                component: ComponentCreator('/specs/ssf/ssf-001/reference/glossary', '691'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/reference/normative-references',
                component: ComponentCreator('/specs/ssf/ssf-001/reference/normative-references', '1c1'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/reference/payload-fields',
                component: ComponentCreator('/specs/ssf/ssf-001/reference/payload-fields', '773'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-001/SPEC',
                component: ComponentCreator('/specs/ssf/ssf-001/SPEC', 'd67'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002',
                component: ComponentCreator('/specs/ssf/ssf-002', '95d'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/core-concepts',
                component: ComponentCreator('/specs/ssf/ssf-002/core-concepts', '2b3'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/core-concepts/connection-model',
                component: ComponentCreator('/specs/ssf/ssf-002/core-concepts/connection-model', 'f38'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/core-concepts/message-authentication',
                component: ComponentCreator('/specs/ssf/ssf-002/core-concepts/message-authentication', 'f92'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/core-concepts/subscription-model',
                component: ComponentCreator('/specs/ssf/ssf-002/core-concepts/subscription-model', 'b60'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/governance',
                component: ComponentCreator('/specs/ssf/ssf-002/governance', 'bd8'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/governance/changelog',
                component: ComponentCreator('/specs/ssf/ssf-002/governance/changelog', 'd8e'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/guides',
                component: ComponentCreator('/specs/ssf/ssf-002/guides', '5ec'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/guides/connect-and-authenticate',
                component: ComponentCreator('/specs/ssf/ssf-002/guides/connect-and-authenticate', 'dbe'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/guides/submit-a-payment',
                component: ComponentCreator('/specs/ssf/ssf-002/guides/submit-a-payment', '871'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/guides/subscribe-to-updates',
                component: ComponentCreator('/specs/ssf/ssf-002/guides/subscribe-to-updates', '63d'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/overview',
                component: ComponentCreator('/specs/ssf/ssf-002/overview', '9b7'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/overview/gateway-role',
                component: ComponentCreator('/specs/ssf/ssf-002/overview/gateway-role', 'e61'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/overview/introduction',
                component: ComponentCreator('/specs/ssf/ssf-002/overview/introduction', '8b8'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/reference/error-codes',
                component: ComponentCreator('/specs/ssf/ssf-002/reference/error-codes', '2a2'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/reference/glossary',
                component: ComponentCreator('/specs/ssf/ssf-002/reference/glossary', '153'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/reference/message-type-index',
                component: ComponentCreator('/specs/ssf/ssf-002/reference/message-type-index', 'e5e'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/ssf/ssf-002/SPEC',
                component: ComponentCreator('/specs/ssf/ssf-002/SPEC', 'bc8'),
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
